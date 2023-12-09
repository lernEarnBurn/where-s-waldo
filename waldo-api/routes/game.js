var express = require('express');
var router = express.Router();

const gameController = require('../controllers/gameController');



router.post('/player', gameController.createPlayer)

router.put('/player/:id', gameController.addRun)

//router.get('/player', gameController.getLeaderboards)

//router.get('/level/:name', gameController.getWinningCoords)





module.exports = router;
