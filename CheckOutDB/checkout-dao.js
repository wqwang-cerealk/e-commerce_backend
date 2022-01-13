const model = require('./checkout-model');

const findAllOder = () => model.find();



const deleteOrder = (id) => model.deleteOne({_id: id});


const createOrder = (order) =>
    model.create(order);

const findOrderById = (id) =>
    model.findById(id);



module.exports = {
    findAllOder,deleteOrder, findOrderById, createOrder
};
