const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.use(cors(), express.json(), express.urlencoded({extended: true}))

const AllMyRoutes = require("./server/routes/product.routes");
AllMyRoutes(app);

app.listen(port, () => console.log(`Loaded on port: ${port}!`));