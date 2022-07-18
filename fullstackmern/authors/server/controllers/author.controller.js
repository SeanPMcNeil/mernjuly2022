const Author = require('../models/author.model');

// CREATE
module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
        .then(author => res.json(author))
        .catch(err => res.json({ message: 'Something went wrong when creating an author!', error: err }));
}

// READ ONE
module.exports.getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.json({ message: 'Something went wrong when finding one author!', error: err }));
}

// READ ALL
module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({ message: 'Something went wrong when finding all authors!', error: err }));
}

// UPDATE
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then( updateAuthor => res.json(updateAuthor))
        .catch( err => res.json({ message: 'Something went wrong when updating one author!', error: err }));
}

// DELETE
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then( deleteAuthor => res.json(deleteAuthor))
        .catch( err => res.json({ message: 'Something went wrong when deleting one author!', error: err }));
}