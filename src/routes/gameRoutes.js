const express = require('express');
const { startGame } = require('../controllers/gameController');

const router = express.Router();

// POST request to /game/start calls startGame function

router.post('/start', startGame);

module.exports = router;
