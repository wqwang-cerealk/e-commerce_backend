const model = require('./products-model');
const updateProduct = (product) =>
    model.updateOne({id: product.id}, {
        $set: product
    });

const findProductById = (id) =>
    model.findOne({ id });
// const findProductById = (id) => model.findById(id)
// const updateComments = (product, comments) => model.updateOne({id: product.id}, {$set: {comments : comments}});

module.exports = {updateProduct, findProductById}