const express = require('express');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/game', gameRoutes); // Use game routes for any request starting with '/game'

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
