const { v4: uuidv4 } = require('uuid');

const isPlayer = require('../models/playerSchema')
const sqlite3 = require('sqlite3').verbose();


exports.createPlayer = (req, res, next) => {
  const playerDb = new sqlite3.Database('./db/players.sqlite', (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    console.log('Connected to the database.');
  });

  const playerId = uuidv4();

  const player = {
    id: playerId,
    name: req.body.name,
    runs: [],
  };

  if (isPlayer(player)) {
    try {
      playerDb.serialize(() => {
        const insertPlayer = playerDb.prepare('INSERT INTO players (id, name, runs) VALUES (?, ?, ?)');
        insertPlayer.run(player.id, player.name, JSON.stringify(player.runs));
        insertPlayer.finalize();
      });

      playerDb.close((err) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(`created player: ${JSON.stringify(player)}`);
  } else {
    res.json('not a player');
  }
};


exports.addRun = (req, res, next) => {
  const playerDb = new sqlite3.Database('./db/players.sqlite', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });
  

  try {
      playerDb.serialize(() => {
          const run = {
              level: req.body.level,
              totalSeconds: Number(req.body.totalSeconds)
          }

          const selectQuery = `SELECT runs FROM players WHERE id = ?`;
          const updateQuery = `UPDATE players SET runs = ? WHERE id = ?`;
          console.log(req.params.id)

          playerDb.get(selectQuery, [req.params.id], (err, row) => {
              if (err) {
                  console.error(err.message);
                  return res.status(500).json({ error: 'Internal Server Error' });
              }

              if (row) {
                  const currentRunsArray = JSON.parse(row.runs || '[]');
                  currentRunsArray.push(run);
                  const updatedRunsValue = JSON.stringify(currentRunsArray);

                  playerDb.run(updateQuery, [updatedRunsValue, req.params.id], (updateErr) => {
                      if (updateErr) {
                          console.error(updateErr.message);
                          return res.status(500).json({ error: 'Internal Server Error' });
                      } else {
                          console.log('Row updated successfully.');
                          playerDb.close();
                          return res.status(200).json({ message: 'Run added successfully' });
                      }
                  });
              } else {
                  console.log('No matching row found.');
                  playerDb.close();
                  return res.status(404).json({ error: 'Player not found' });
              }
          });
      });
  } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getLeaderboards = (req, res, next) => {
  const playerDb = new sqlite3.Database('./db/players.sqlite', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });
  

  try {
    playerDb.serialize(() => {
      const level = req.params.level;
    
      const query = `
        SELECT DISTINCT players.id, players.name, CAST(json_extract(value, '$.totalSeconds') AS INTEGER) AS totalSeconds
        FROM players
        JOIN json_each(players.runs) ON 1
        WHERE json_array_length(players.runs) > 0 AND json_extract(value, '$.level') = ?
        ORDER BY totalSeconds ASC
        LIMIT 15;
      `;
    
      playerDb.all(query, [level], (err, rows) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
    
        if (rows.length > 0) {
          const leaderboards = rows.map((row) => ({
            name: row.name,
            totalSeconds: row.totalSeconds,
          }));
    
          return res.status(200).json(leaderboards);
        } else {
          console.log('No matching rows found.');
    
          // If no matching rows are found, adjust the query to get all rows
          const allRowsQuery = `
            SELECT DISTINCT players.id, players.name, CAST(json_extract(value, '$.totalSeconds') AS INTEGER) AS totalSeconds
            FROM players
            JOIN json_each(players.runs) ON 1
            WHERE json_array_length(players.runs) > 0 AND json_extract(value, '$.level') = ?
            ORDER BY totalSeconds ASC;
          `;
    
          playerDb.all(allRowsQuery, [level], (allRowsErr, allRows) => {
            if (allRowsErr) {
              console.error(allRowsErr.message);
              return res.status(500).json({ error: 'Internal Server Error' });
            }
    
            const leaderboards = allRows.map((row) => ({
              name: row.name,
              totalSeconds: row.totalSeconds,
            }));
    
            return res.status(200).json(leaderboards);
          });
        }
      });
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getWinningCoords = (req, res, next) => {
  const levelsDb = new sqlite3.Database('./db/levels.sqlite', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });
  try {
    levelsDb.serialize(() => {
      
        const selectQuery = `SELECT x_start, x_end, y_start, y_end
                             FROM levels
                             WHERE name = ?;`;
      
        levelsDb.get(selectQuery, [req.body.level], (err, row) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
          
            if (row) {
                return res.status(200).json(row);
            
            } else {
                console.log('No matching row found.');
                playerDb.close();
                return res.status(404).json({ error: 'Level not found' });
            }
        });
    });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
