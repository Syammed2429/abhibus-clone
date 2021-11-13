const express = require('express');
const app = express();
app.use(express.json());

const traincontroller = require('./controllers/trainsdata')

app.use("/trains",traincontroller);


module.exports =app;