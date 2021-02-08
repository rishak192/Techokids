const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({

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

module.exports =  mongoose.model('products', Product);