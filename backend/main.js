const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const cors = require('cors');
const keys = require('./config/keys')
const User = require('./routes/User')
const passport = require('passport')
const Games = require('./routes/Games');
const Board = require('./routes/Board');
const paths = require('./config/paths');

const app = express()
const port = 8000

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors())

const db = keys.mongoUrl
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("Connected to database"))
    .catch((err)=>console.log(err))

require('./config/passport')(passport);
app.use(passport.initialize());
app.get('/', (req, res) => res.send('Hello World!'))
app.use("/user/", User)
app.use("/games/", Games)
app.use("/board/", Board)
app.use("/public", express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))