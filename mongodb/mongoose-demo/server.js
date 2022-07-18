const express = require('express');
const app = express();
const port = 8000;

// Be sure to add this line after making mongoose.config
require("./server/config/mongoose.config")

// Don't forget this line!
app.use(express.json(), express.urlencoded({extended: true}));

// Make sure this line comes after the parsing line ^
const AllMyRoutes = require("./server/routes/animal.routes");
AllMyRoutes(app);

app.listen(port, () => console.log(`Running on port: ${port}!!`));