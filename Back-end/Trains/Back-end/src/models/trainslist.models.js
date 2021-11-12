const mongoose = require('mongoose');

const trainDetails = new mongoose.Schema({
    train_number: {type:String},
    train_name: {type:String},
    source_station: {type:String},
    destination: {type:String},
    seat_availability: {
      second_seating:{type:String},
      sleeper:{type:String},
      tird_ac:{type:String},
      second_ac:{type:String},
      first_ac:{type:String}
    },
    duration:{type:String},
    type:{type:String},
    departure_time:{type:String},
    arrival_time: {type:String},
    running_days: {
      monda:{type:Boolean},
      tuesday:{type:Boolean},
      wednesday:{type:Boolean},
      thursday:{type:Boolean},
      friday:{type:Boolean},
      saturday:{type:Boolean},
      sunday:{type:Boolean}
    },
    general: {type:Boolean},
    ladies: {type:Boolean},
    tatkal:{type:Boolean},
    tatkal_seats_available: {type:Number},
    ticket_price:{
      second_seating:{type:Number},
      SL:{type:Number},
      tird_ac:{type:Number},
      second_ac:{type:Number},
      first_ac:{type:Number}
    }
})

const Trains = mongoose.model('trainsdatas',trainDetails)

module.exports = Trains;
