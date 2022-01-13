const mongoose = require('mongoose');
const schema = mongoose.Schema({
    _id:{type:Number},
    store_name:String,
    product:{
        _id:String,
        "image":String,
        title: String,
        price: {type:Number,defaultValue:0},
        description:String,
        category:String,
        stock:{type:Number,defaultValue:0},
    }
},{collection:"password"})
module.exports = schema;