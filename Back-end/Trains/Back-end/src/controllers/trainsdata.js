const express = require('express');

const router = express.Router();
const Trains = require('../models/trainslist.models');

router.get("/:source/:destination",async(req,res)=>{
    try{
        const trains = await Trains.find({$and: [{"source_station": req.params.source}, {"destination": req.params.destination}]}).lean().exec();
    console.log(req.params.source,req.params.destination)
    return res.status(200).send({trains});
    }catch(err) {
        console.log(err.message)
    }
})
// router.get("",async(req,res)=>{
//     const trains = await Trains.find().lean().exec();
    
//     return res.status(200).send({trains});
// })

router.get("/sortbyduration/:source/:destination",async(req,res)=>{
    try{
        const trains = await Trains.find({$and: [{"source_station": req.params.source}, {"destination": req.params.destination}]}).sort({"duration":1}).lean().exec();
    console.log(req.params.source,req.params.destination)
    return res.status(200).send({trains});
    }catch(err) {
        console.log(err.message)
    }

})
router.get("/sortbyarrival/:source/:destination",async(req,res)=>{
    try{
        const trains = await Trains.find({$and: [{"source_station": req.params.source}, {"destination": req.params.destination}]}).sort({"arrival_time":1}).lean().exec();
    console.log(req.params.source,req.params.destination)
    return res.status(200).send({trains});
    }catch(err) {
        console.log(err.message)
    }

})
router.get("/sortbydepart/:source/:destination",async(req,res)=>{
    try{
        const trains = await Trains.find({$and: [{"source_station": req.params.source}, {"destination": req.params.destination}]}).sort({"departure_time":1}).lean().exec();
    console.log(req.params.source,req.params.destination)
    return res.status(200).send({trains});
    }catch(err) {
        console.log(err.message)
    }

})

//get train details by id;
router.get("/:id",async(req,res)=>{
    try{
        const trains = await Trains.findById(req.params.id).lean().exec()
    return res.status(200).send({trains});
    }catch(err) {
        console.log("yahan se")
        console.log(err.message)
    }
})
module.exports = router;
