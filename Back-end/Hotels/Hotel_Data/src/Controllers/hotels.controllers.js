const express =require("express");
const Hotels = require("../models/hotels.model");

const router=express.Router();



router.post("",async (req,res)=>{

    const hotel = await Hotels.create(req.body);
    return res.send({"hotel":hotel})
})

router.get("",async (req,res)=>{
    const user_d = await Hotels.find().sort({price:1}).lean().exec();
    res.send(user_d);
})

router.get("/sort_asc",async (req,res)=>{
    const user_d = await Hotels.find().sort({price:1}).lean().exec();
    res.send(user_d);
})

router.get("/sort_desc",async (req,res)=>{
    const user_d = await Hotels.find().sort({price:-1}).lean().exec();
    res.send(user_d);
})

router.get("/filter_ac",async (req,res)=>{
    const user_d = await Hotels.find({ac:true}).sort({price:-1}).lean().exec();
    res.send(user_d);
})

router.get("/filter_wifi",async (req,res)=>{
    const user_d = await Hotels.find({wifi:true}).sort({price:-1}).lean().exec();
    res.send(user_d);
})

// router.get("/filter_front_desk",async (req,res)=>{
//     const user_d = await Hotels.find({front_desk:true}).sort({price:-1}).lean().exec();
//     res.send(user_d);
// })

router.get("/filter_query",async (req,res)=>{
    let qu= req.query;
    console.log(qu)
    const user_d = await Hotels.find(qu).sort({price:-1}).lean().exec();
    console.log(user_d)
    res.send(user_d);
})

// router.get("/filter_breakfast",async (req,res)=>{
//     const user_d = await Hotels.find({breakfast:true}).sort({price:-1}).lean().exec();
//     res.send(user_d);
// })

// router.get("/filter_restaurent",async (req,res)=>{
//     const user_d = await Hotels.find({restaurent:true}).sort({price:-1}).lean().exec();
//     res.send(user_d);
// })

// router.get("/filter_Laundry",async (req,res)=>{
//     const user_d = await Hotels.find({Laundry:true}).sort({price:-1}).lean().exec();
//     res.send(user_d);
// })



router.get("/:id",async (req,res)=>{
    const user_d = await Hotels.findById(req.params.id).lean().exec();
    res.send(user_d);
})

router.patch("/:id",async (req,res)=>{
  
    const user_d = await Hotels.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
   
    res.send(user_d);
})


router.delete("/:id",async (req,res)=>{
    const user_d = await Hotels.findByIdAndDelete(req.params.id).lean().exec();
    res.status(200).send(user_d);
})




module.exports=router;