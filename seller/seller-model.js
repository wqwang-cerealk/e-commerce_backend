const mongoose = require('mongoose');
const schema = require('./seller-schema');
const model = mongoose.model('SellerModel', schema);
module.exports = model;