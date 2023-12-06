var express = require('express');
var router = express.Router();

router.post('/player', gameController.createPlayer)

router.put('/player/:name', gameController.addRun)

router.get('/player', gameController.getLeaderboards)

router.get('/level/:name', gameController.getWinningCoords)





module.exports = router;
