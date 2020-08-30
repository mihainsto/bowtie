const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    gameId : String,
    title: String,
    imageUrl: String,
    releaseDate: String,
    Date: {
        type: Date,
        default: Date.now
    },
})

module.exports = Games = mongoose.model("Game",GameSchema);