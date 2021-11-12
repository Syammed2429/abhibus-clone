const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    travelingHours: { type: String, required: true },
    busName: { type: String, required: true },
    busType: [{ type: String, required: true }],
    seatsAvailable: { type: Number, required: true },
    price: { type: Number, required: true },


},
    {

        versionKey: false,
        timestamps: true
    }

);



const Bus = mongoose.model('bus', busSchema);

module.exports = Bus;