const Game = require("../models/game.model");

// CREATE
module.exports.createGame = (req, res) => {
    Game.create(req.body)
        .then(newGame => res.json(newGame))
        .catch(err => res.json({message: "Error making a game!", error: err}))
}
// READ ALL
module.exports.findAllGames = (req, res) => {
    Game.find()
        .then(allGames => res.json(allGames))
        .catch(err => res.json({message: "Error grabbing all games!", error: err}))
}
// READ ONE
module.exports.findOneGame = (req, res) => {
    Game.find({_id: req.params.id })
        .then(oneGame => res.json(oneGame))
        .catch(err => res.json({message: "Error finding one game!", error: err}))
}
// UPDATE
module.exports.updateGame = (req, res) => {
    Game.findOneAndUpdate({_id: req.params.id }, req.body, {new: true})
        .then(oneGame => res.json(oneGame))
        .catch(err => res.json({message: "Error updating one game!", error: err}))
}
// DELETE
module.exports.deleteGame = (req, res) => {
    Game.deleteOne({_id: req.params.id })
        .then(res.json({message: "Game was successfully removed!"}))
        .catch(err => res.json({message: "Error deleting one game!", error: err}))
}