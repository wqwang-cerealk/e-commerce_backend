const dao = require('../seller/seller-dao')

module.exports = (app) => {
    const findAllSellers = (req, res) =>
        dao.findAllSellers()
            .then(seller => res.json(seller));

    const postNewProduct = (req, res) => {
        console.log("This is the req.body in seller-service:", req.body);
        const newProduct = req.body;
        return dao.createProduct(newProduct)
            .then(status => res.send(status));
    }

    const deleteProduct = (req, res) => {
        console.log("This is the id that should be eliminated in seller-service:",req);
        const productId = req.params;
        return dao.deleteProduct(productId)
            .then(status => res.send(status));
    }

    app.get('/api/seller', findAllSellers);
    app.put('/api/seller', postNewProduct);
    // app.put('/api/seller', deleteProduct);

}