const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/', ProductController.getAllProducts);
    app.post('/products/new', ProductController.createProduct);
    app.get('/products', ProductController.getAllProducts);
    app.get('/products/:id', ProductController.getProduct)
}

