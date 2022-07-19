const GameController = require("../controllers/game.controller");

module.exports = app => {
    // CREATE
    app.post("/api/games/create", GameController.createGame)
    // READ ALL
    app.get("/api/games", GameController.findAllGames)
    // READ ONE
    app.get("/api/games/:id", GameController.findOneGame)
    // UPDATE
    app.put("/api/games/update/:id", GameController.updateGame)
    // DELETE
    app.delete("/api/games/delete/:id", GameController.deleteGame)
}