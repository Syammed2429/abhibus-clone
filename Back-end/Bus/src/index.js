const port = 2924;
const express = require('express');
const cors = require('cors');
const app = express();

const busController = require('./controller/busController')
const hotelController = require("./controller/hotels.controllers");
const traincontroller = require('./controller/trainsdata')


app.use(cors());
app.use(express.json());

app.use("/trains", traincontroller);
app.use("/hotels", hotelController);
app.use('/bus', busController)


module.exports = {
    port,
    app
}