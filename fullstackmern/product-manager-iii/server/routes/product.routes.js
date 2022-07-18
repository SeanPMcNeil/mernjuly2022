const ProductController = require('../controllers/product.controller');

module.exports = app => {
    // CREATE
    app.post('/api/products/create', ProductController.createProduct);
    // READ ONE
    app.get('/api/products/:id', ProductController.getProduct);
    // READ ALL
    app.get('/api/products', ProductController.getAllProducts);
    // UPDATE
    app.put('/api/products/update/:id', ProductController.updateProduct);
    // DELETE
    app.delete('/api/products/delete/:id', ProductController.deleteProduct);
}

