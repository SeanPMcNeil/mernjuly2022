const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

require('./server/routes/person.routes')(app);

app.listen(8000, () => console.log(`listening on port 8000`));