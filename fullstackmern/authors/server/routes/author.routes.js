const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    // CREATE
    app.post('/api/authors/create', AuthorController.createAuthor);
    // READ ONE
    app.get('/api/authors/:id', AuthorController.getOneAuthor);
    // READ ALL
    app.get('/api/authors', AuthorController.getAllAuthors);
    // UPDATE
    app.put('/api/authors/update/:id', AuthorController.updateAuthor);
    // DELETE
    app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor);
}

