const { app } = require('./app.js');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`mario-api listening at http://localhost:${port}`);
});