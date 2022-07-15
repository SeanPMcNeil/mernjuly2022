const { Product } = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({ message: "Hello World" });
}

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts} ))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.getProduct = (req, res) => {
    Product.findOne({ _id:req.params.id })
        .then(product => res.json({ product: product }))
        .catch(err => res.json(err))
}