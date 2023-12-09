const { v4: uuidv4 } = require('uuid');

const isPlayer = require('../models/playerSchema')
const playerDb = require('../dbConfig.js').playersDb


exports.createPlayer = (req, res, next) => {
  const player = {
    id: uuidv4(),
    name: req.body.name,
    runs: [] 
  };
  
  if(isPlayer(player)){
    try {
      playerDb.serialize(() => {
        const insertPlayer = playerDb.prepare('INSERT INTO players (id, name, runs) VALUES (?, ?, ?)');
        insertPlayer.run(player.name, JSON.stringify(player.runs));
        insertPlayer.finalize()
      })
      
      playerDb.close((err) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      });
    } catch(err){
      console.error(err.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(`created player: ${JSON.stringify(player)}`)

  }else{
    res.json('not a player')
  }  
}

exports.addRun = (req, res, next) => {
  try {
      playerDb.serialize(() => {
          const run = {
              level: req.body.level,
              totalSeconds: Number(req.body.totalSeconds)
          }

          const selectQuery = `SELECT runs FROM players WHERE id = ?`;
          const updateQuery = `UPDATE players SET runs = ? WHERE id = ?`;

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
