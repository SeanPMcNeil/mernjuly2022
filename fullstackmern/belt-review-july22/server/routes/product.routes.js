const ProductController = require("../controllers/product.controller");

module.exports = app => {
    // CREATE
    app.post("/api/product/create", ProductController.createOne);
    // READ ALL
    app.get("/api/product", ProductController.findAll);
    // READ ONE
    app.get("/api/product/:id", ProductController.findOne);
    // UPDATE
    app.put("/api/product/update/:id", ProductController.updateProduct);
    // DELETE
    app.delete("/api/product/delete/:id", ProductController.deleteProduct);
}