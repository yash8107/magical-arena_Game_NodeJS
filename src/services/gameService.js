const { rollDice } = require('../utils/dice');
const Player = require('../models/player');

exports.initializeGame = (playerAData, playerBData) => {

    // we created Player objects from above input data

    const playerA = new Player(playerAData.health, playerAData.strength, playerAData.attack);
    const playerB = new Player(playerBData.health, playerBData.strength, playerBData.attack);

    // Determine who goes first

    let turn = playerA.health < playerB.health ? 'A' : 'B';
    let gameResult = [];

    
    //the game run until one player runs out of health to 0

    while (playerA.health > 0 && playerB.health > 0) {
        console.log("turn",turn)
        if (turn === 'A') {
            console.log("playerA.health, playerB.health", playerA.health,playerB.health)

            // Roll dice for attack and defend 
            // const attackRoll = rollDice();
            // const defendRoll = rollDice();
            // console.log("attackRoll, defendRoll",attackRoll, defendRoll)

            // Calculateing the  damage and passing the hardcoded value of dice here for now...
            const damage = playerA.attack * 5 - playerB.strength * 2;
            console.log("damage",damage)

            // Apply damage to Player B
            playerB.health -= damage;

            // Log the result
            gameResult.push(`Player A attacks: ${damage}, Player B health: ${playerB.health}`); 
            turn = 'B'; // Switch turn
        } else {
            // const attackRoll = rollDice();
            // const defendRoll = rollDice();

            //passing the hardcoded value of dice here...
            const damage = playerB.attack * 4 - playerA.strength * 3;

            console.log("damage of Player B in Else--> ",damage);
            playerA.health -= damage;

            console.log("playerA health", playerA)
            console.log("playerB health", playerB)

            gameResult.push(`Player B attacks: ${damage}, Player A health: ${playerA.health}`);
            turn = 'A';
        }
    }

    const winner = playerA.health > 0 ? 'Player A' : 'Player B'; // Determine the winner

    gameResult.push(`${winner} wins!`); // Log the winner
    return gameResult; // Return the game log
};
