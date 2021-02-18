const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my mario bros api! Enjoy.'} );
})

module.exports = {
    app
};