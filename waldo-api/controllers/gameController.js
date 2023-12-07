const isPlayer = require('../models/playerSchema')
const playerDb = require('../dbConfig.js').playersDb


exports.createPlayer = (req, res, next) => {
  const player = {
    name: req.body.name,
    runs: [] 
  };
  
  if(isPlayer(player)){
    try {
      playerDb.serialize(() => {
        const insertPlayer = playerDb.prepare('INSERT INTO players (name, runs) VALUES (?, ?)');
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
