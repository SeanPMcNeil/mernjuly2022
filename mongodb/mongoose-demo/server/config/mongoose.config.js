// We need mongoose
const mongoose = require('mongoose');

// We need to conect to our DB
mongoose.connect("mongodb://localhost/july-2022-mongo-demo-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('I found the mongoose!'))
    .catch(() => console.log('I lost the mongoose!', err))