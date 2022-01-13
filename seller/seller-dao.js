const model = require('./seller-model');

const findAllSellers = () => model.find();

const createProduct = (product) => model.updateOne({_id:1},{$push:{product: product}});

const deleteProduct = (product) => model.updateOne({_id:1},{$pull:{product:{_id: product._id}}});

module.exports = {
    findAllSellers, createProduct, deleteProduct
}