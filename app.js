const express = require('express');
const app = express();
const { mario_bros_data } = require('./data.js');

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my mario bros api! Enjoy.'} );
})

app.get('/bros', (req, res) => {
    res.json({ response: mario_bros_data} );
})

module.exports = {
    app
};