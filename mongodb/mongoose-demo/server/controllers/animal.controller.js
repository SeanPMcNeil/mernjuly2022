// Bring in the animal model
const Animal = require("../models/animal.model");

// BASIC CRUD COMMANDS

// CREATE
module.exports.createAnimal = (req, res) => {
    Animal.create(req.body)
        .then( newlyCreatedAnimal => res.json(newlyCreatedAnimal))
        .catch( err => res.json({ message: 'Something went wrong when creating an animal!', error: err }));
}

// READ ONE
module.exports.findOneAnimal = (req, res) => {
    Animal.find({ _id: req.params.id })
        .then( oneAnimal => res.json(oneAnimal))
        .catch( err => res.json({ message: 'Something went wrong when finding one animal!', error: err }));
}

// READ ALL
module.exports.findAllAnimals = (req, res) => {
    Animal.find()
        .then( allAnimals => res.json(allAnimals))
        .catch( err => res.json({ message: 'Something went wrong when finding all animals!', error: err }));
}

// UPDATE
module.exports.updateAnimal = (req, res) => {
    Animal.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then( updateAnimal => res.json(updateAnimal))
        .catch( err => res.json({ message: 'Something went wrong when updating one animal!', error: err }));
}

// DELETE
module.exports.deleteAnimal = (req, res) => {
    Animal.deleteOne({ _id: req.params.id })
        .then( deleteAnimal => res.json(deleteAnimal))
        .catch( err => res.json({ message: 'Something went wrong when deleting one animal!', error: err }));
}