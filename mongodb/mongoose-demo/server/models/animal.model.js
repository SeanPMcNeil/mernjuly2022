// bring in mongoose so we can properly create a 'schema'
const mongoose = require('mongoose');

// We make our model
const AnimalSchema = new mongoose.Schema({
    name: String,
    fact: String
});

// Finalize setting up the model
const Animal = mongoose.model("Animal", AnimalSchema);
// Need to export the table to other areas of the project
module.exports = Animal;