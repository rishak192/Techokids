const { Int32, ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
    Pid:{
        type:String
    },
    Name:{
        type:String
    },
    Description:{
        type:String,
    },
    UnitPrice:{
        type:Number
    },
    Quantity:{
        type:Number
    },
})

module.exports =  mongoose.model('carts', Cart);