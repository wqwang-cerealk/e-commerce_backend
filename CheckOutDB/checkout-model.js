const mongoose = require('mongoose');
const schema = require('./checkout-schema');
const model = mongoose.model('OdersModel', schema);
module.exports = model;

