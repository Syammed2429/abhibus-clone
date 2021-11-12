const port = 2924;
const express = require('express');
const busController = require('./controller/busController')

const app = express();
app.use(express.json());

app.use('/bus', busController)


module.exports = {
    port,
    app
}