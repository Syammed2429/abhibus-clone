const express = require('express');
const Bus = require('../models/busmodel');

const router = express.Router();

router.post("", async (req, res) => {
    const bus = await Bus.create(req.body);

    return res.status(201).send(bus)
});

router.get("/", async (req, res) => {
    const bus = await Bus.find({ from: req.query.from, to: req.query.to }).lean().exec();
     //console.log('req.params.busName:', req.query.from,req.query.to )
     //console.log('Bus:', bus)
    return res.status(200).send(bus)
})
router.get("/sort", async (req, res) => {
    let qu=req.query.sorting;
    const bus = await Bus.find({ from: req.query.from, to: req.query.to }).sort({qu:1}).lean().exec();
     //console.log('req.params.busName:', req.query.from,req.query.to )
     //console.log('Bus:', bus)
    return res.status(200).send(bus)
})
router.get("", async (req, res) => {
    const buses = await Bus.find().lean().exec();

    return res.status(200).send(buses);
})


router.get("/test", async (req, res) => {
    return res.status(200).send("Hello world")
})
module.exports = router;