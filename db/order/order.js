const mongoose = require('mongoose');
var orderlist = new mongoose.Schema({
    userid:String,
    orderlist:String
    
})

var orderlists = mongoose.model("orderlist",orderlist);


module.exports = orderlists;