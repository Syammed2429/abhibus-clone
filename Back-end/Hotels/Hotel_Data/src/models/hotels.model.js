const mongoose = require("mongoose");

const hotelSchema=new mongoose.Schema({
    hotel_name:{type:String,required:true},
   location:{type:String,required:true},
    price : {type:Number},
   front_desk :{type:Boolean,required:true},
   ac:{type:Boolean,required:true},
  wifi:{type:Boolean,required:true},
  breakfast:{type:Boolean,required:true},
  restaurent :{type:Boolean,required:true},
  Laundry:{type:Boolean,required:true},
  gallery:[{type:String,required:true}],
  thumbnail:{type:String,required:true},
  oak_price:{type:Number,required:true},
 maple_price:{type:Number,required:true},
    description:{type:String,required:true}
},{
    versionKey:false
});
module.exports=mongoose.model("hotels",hotelSchema)