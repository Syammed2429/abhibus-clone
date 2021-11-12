const express = require("express");

const app = express();
const connect = require("../configs/db.js");


app.use(express.json());


const hotelController =require("./controllers/hotels.controllers");


app.use("/hotels",hotelController);



   
app.listen(3210,async ()=>{
      await  connect();
     console.log("listening on port 3210")
});

 



 

