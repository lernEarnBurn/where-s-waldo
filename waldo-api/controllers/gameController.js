const isPlayer = require('../models/playerSchema')
const playerDb = require('../dbConfig.js').playersDb

const asyncHandler = require('express-async-handler')

//async handler not working
exports.createPlayer = asyncHandler(async(req, res, next) => {
  const player = {
    name: req.body.name,
    runs: [] 
  };
  
  if(isPlayer(player)){
    try {
      const insertPlayer = await playerDb.prepare('INSERT INTO players (name, runs) VALUES (?, ?)');
      await insertPlayer.run(player.name, JSON.stringify(player.runs));
      
      playerDb.close((err) => {
        if (err) {
          return console.error(err.message);
        }
      });
    } catch(err){
      console.log(err)
    }
    res.json(`created player: ${player}`)
  }else{
    res.json('not a player')
  }  
})
