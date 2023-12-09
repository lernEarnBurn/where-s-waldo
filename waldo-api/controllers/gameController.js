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
        const insertPlayer = playerDb.prepare('INSERT INTO players (id, name, runs) VALUES (?, ?)');
        insertPlayer.run(player.name, JSON.stringify(player.runs));
        insertPlayer.finalize()
      })
      
      playerDb.close((err) => {
        if (err) {
          return console.error(err.message);
        }
      });
    } catch(err){
      console.log(err)
    }
    res.json(`created player: ${JSON.stringify(player)}`)

  }else{
    res.json('not a player')
  }  
}


exports.addRun = (req, res, next) => {
      try {
        const playerDb = new sqlite3.Database('your_database.db');
      
        playerDb.serialize(() => {
           
        
           
            // New value to append to the 'runs' property
            const newValue = 'new_value_to_append';
        
            // Query to select the existing 'runs' value and append the new value
            const selectQuery = `SELECT runs FROM players (id, name, run) WHERE id = ?`;
            const updateQuery = `UPDATE players (id, name, run) SET runs = ? WHERE id = ?`;
        
            playerDb.get(selectQuery, [idToFind], (err, row) => {
                if (err) {
                    console.error(err.message);
                    return playerDb.close();
                }
              
                // Check if a row was found
                if (row) {
                    // Extract the current 'runs' array
                    const currentRunsArray = JSON.parse(row.runs || '[]');
                
                    // Append the new value
                    currentRunsArray.push(newValue);
                
                    // Convert the updated 'runs' array back to a JSON string
                    const updatedRunsValue = JSON.stringify(currentRunsArray);
                
                    // Execute the update query with the updated 'runs' value
                    playerDb.run(updateQuery, [updatedRunsValue, idToFind], (updateErr) => {
                        if (updateErr) {
                            console.error(updateErr.message);
                        } else {
                            console.log('Row updated successfully.');
                        }
                      
                        // Close the database connection
                        playerDb.close();
                    });
                } else {
                    console.log('No matching row found.');
                    playerDb.close();
                }
            });
        });
    } catch (err) {
        console.log(err);
    }
}