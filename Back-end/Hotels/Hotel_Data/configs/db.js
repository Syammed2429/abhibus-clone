const mongoose =require("mongoose");


const connect =()=>{ 
    return  mongoose.connect("mongodb://localhost:27017/Abhibud_hotels",{
    useNewUrlParser:true,
  
})
}
module.exports=connect;