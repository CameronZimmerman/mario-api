const express = require('express');
const app = express();
const { mario_bros_data } = require('./data.js');

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my mario bros api! Enjoy.'} );
});

app.get('/bros', (req, res) => {
    res.json({ response: mario_bros_data} );
});

app.get('/bros/:name', (req, res) => {
    let name = req.params.name;

    let mario_bros_obj = mario_bros_data.find(data_obj => data_obj.name === name);

    res.json({response: mario_bros_obj});
});

module.exports = {
    app
};