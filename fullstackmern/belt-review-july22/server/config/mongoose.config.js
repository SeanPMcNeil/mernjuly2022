const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/belt-review-july22-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("I found the mongoose!"))
    .catch(err => console.log("I lost the mongoose!", err));