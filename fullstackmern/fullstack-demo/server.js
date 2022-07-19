const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;

// Add in our connection to the config file
require("./server/config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({extended:true}))

// Add in our connection to our routes (AFTER CODE FOR POST REQUESTS ^)
require("./server/routes/game.routes")(app);

app.listen(port, () => console.log(`Running on port: ${port}!`))