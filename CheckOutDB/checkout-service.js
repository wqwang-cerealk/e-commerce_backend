const dao = require('./checkout-dao')

module.exports = (app) => {

    const findAllOder = (req, res) =>
        dao.findAllOder()
            .then(orders => {
                    console.log(orders)
                    return res.json(orders)
                }
            );

    const deleteOrder = (req, res) => {
        console.log("req.params.id", req.params.id)
        return  dao.deleteOrder(req.params.id)
            .then((status) => res.send(status));
    }


    const createOrder = (req, res) => {
        const order =  dao.findOrderById(req.params.id);
        console.log("+++++++", req.body)
        return dao.createOrder(order)
            .then((insertedOrder) => res.json(insertedOrder))
    }


   

    const findOrderById = (req, res) =>
        dao.findOrderById(req.params.id)
            .then(order => res.json(order));



    app.get("/rest/orders/:id", findOrderById);
    app.delete("/rest/orders/:id", deleteOrder);
    app.get("/rest/cart", findAllOder);
    app.post("/rest/product/:id", createOrder);

}