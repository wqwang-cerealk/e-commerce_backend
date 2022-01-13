const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    phone: String,
    location: String,
    firstName: String,
    lastName: String,
    asSeller:Array,
    asBuyer: Array,
    image: String
}, {collection: 'password'});
module.exports = userSchema;