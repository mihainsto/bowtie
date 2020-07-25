const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    listsOrder:[String],
    cards: [{
        cardId: String,
        gameId: String,
      }],
    lists: [{
        listId: String,
        cardsIds: [String],
        title: String
    }]
})



module.exports = BoardSchema