const mongoose = require('mongoose');
const BoardSchema = require('./Board');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    board: BoardSchema,
    options: Object
})

module.exports = Users = mongoose.model("Users",UserSchema);
