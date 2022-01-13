const mongoose = require('mongoose');
const schema = require('./products-schema');
const model = mongoose.model('ProductsModel', schema);

module.exports = model;