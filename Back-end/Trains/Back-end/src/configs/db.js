const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongodb+srv://abhi-bus:abhi-bus@cluster0.6nos1.mongodb.net/abhiBus?retryWrites=true&w=majority")
}

module.exports = connect
//mongodb+srv://abhi-bus:abhi-bus@cluster0.6nos1.mongodb.net/abhiBus?retryWrites=true&w=majority