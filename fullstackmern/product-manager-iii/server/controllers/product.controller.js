const Product = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({ message: "Hello World" });
}

// CREATE
module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json({ message: 'Something went wrong when creating a product!', error: err }));
}

// READ ALL
module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ message: "Something went wrong when finding all products!", error: err }));
}

// READ ONE
module.exports.getProduct = (req, res) => {
    Product.findOne({ _id:req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json({ message: 'Something went wrong when finding one product!', error: err }));
}

// UPDATE
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then( updateProduct => res.json(updateProduct))
        .catch( err => res.json({ message: 'Something went wrong when updating one product!', error: err }));
}

// DELETE
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then( deleteProduct => res.json(deleteProduct))
        .catch( err => res.json({ message: 'Something went wrong when deleting one product', error: err }));
}