// We need express
const express = require("express");
// We need to create an app where everything will run from
const app = express();
// We are going to set up a port
const port = 8000;
// YOU NEED THESE 2 LINES FOR POST REQUESTS TO WORK
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// This is going to be my example database
const users = [
    {name: "Nichole", favoriteLanguage: "C#"},
    {name: "David", favoriteLanguage: "JavaScript"},
    {name: "Alex", favoriteLanguage: "Java"}
]

app.get("/", (req, res) => {
    res.json({ message: "Hello from our first server!" })
})

app.get("/example", (req, res) => {
    res.json({ message: "Hello from the example page!", number: 7 })
})

// Let's make a POST request!
app.post("/post", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    // This must be here or Postman hangs forever
    res.json(users);
})

app.get("/users/:id", (req, res) => {
    res.json(users[req.params.id]);
})

// We need to start our server
app.listen( port, () => console.log(`Running on port: ${port}`) );