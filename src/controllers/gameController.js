const { initializeGame } = require('../services/gameService');

exports.startGame = (req, res) => {
    console.log("Incoming request", req.body);

    const { playerA, playerB } = req.body;

    const gameResult = initializeGame(playerA, playerB);
    // Send the result back as a JSON response
    res.status(200).json(gameResult);
};
