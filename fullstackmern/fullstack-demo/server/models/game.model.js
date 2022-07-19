const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Game must have a title!"]
    },
    art: {
        type: String,
        required: [true, "Game must have an image!"]
    },
    minPlayers: {
        type: Number,
        required: [true, "Must have a # of players"],
        min: [1, "At least 1 person is needed to play a game"]
    }
}, {timestamps: true})

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;