const dao = require('./products-dao')
module.exports = (app) => {
    const updateProduct = (req, res) =>                //
    {
        console.log(req.body);
        return dao.updateProduct(req.body)
            .then(status => {
                console.log(status)
                return res.send(status)
            })
    }




    const findProduct = (req, res) =>{
        console.log(req.params.id)
        dao.findProductById(req.params.id)
            .then(product => res.json(product));
    }


    app.get("/api/product/:id", findProduct);

    // const updateComments = (req, res) =>
    // {
    //     console.log("This is req.body from updateComments", req.body);
    //     return dao.updateComments()
    // }
    app.put('/api/product', updateProduct)
}

