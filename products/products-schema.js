const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    id: Number,
    title: String,
    price: String,
    description: String,
    category: String,
    image: String,
    rating: Object,
    comments: Array
}, {collection: 'products'});
module.exports = userSchema;