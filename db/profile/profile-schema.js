const mongoose = require('mongoose');
const schema = mongoose.Schema({
    photo: String,
    username: String,
    identity: String,
    selled: Number,
    bought: Number,
    comment: Number,
    name: String,
    email: String,
    phone: Number,
    location: String,
}, {collection: 'users'});
module.exports = schema;