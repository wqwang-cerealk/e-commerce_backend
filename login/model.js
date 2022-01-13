const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('LoginModel', schema);

module.exports = model;
