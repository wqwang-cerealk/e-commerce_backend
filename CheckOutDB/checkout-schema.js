const mongoose = require('mongoose');
const schema = mongoose.Schema({
        "id": {type: Number, default: 0},
        "title": String,
        "price": {type: Number},
        "description": String,
        "category": String,
        "image": String,
        "rating": {
            "rate": {type: Number, default: 0},
            "count": {type: Number, default: 0}
        }
    },
    {collection: "orders"});
module.exports = schema;

