const Product = require("../models/product.model");

// CREATE
module.exports.createOne = (req, res) => {
    Product.create(req.body)
        .then(addOne => res.json(addOne))
        .catch(err => res.json({message: "Error adding Product!", error: err}))
}
// READ ALL
module.exports.findAll = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: "Error finding all Products!", error: err}))
}
// READ ONE
module.exports.findOne = (req, res) => {
    Product.find({_id: req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "Error finding one Product!", error: err}))
}
// UPDATE
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "Error updating one Product!", error: err}))
}
// DELETE
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(res.json({message: "Product deleted!"}))
        .catch(err => res.json({message: "Error deleting one Product!", error: err}))
}