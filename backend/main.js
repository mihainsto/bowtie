const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
// const DB = require('./database/database') 
const keys = require('./config/keys')
const User = require('./routes/User')
const passport = require('passport')
const Games = require('./routes/Games');

const app = express()
const port = 8000
mongoose
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const db = keys.mongoUrl
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("Connected to database"))
    .catch((err)=>console.log(err))

require('./config/passport')(passport);
app.use(passport.initialize());
app.get('/', (req, res) => res.send('Hello World!'))
app.use("/user/", User)
app.use("/games/", Games)

// app.post('/auth', (req, res) =>{

//     res.send('auth')
// })

// app.post('/register', async (req, res) => {
//     try {
//         console.log(req.body)
//         const salt = await bcrypt.genSalt()
//         const hashedPassword = await bcrypt.hash(req.body.password, salt)
//         console.log(salt)
//         console.log(hashedPassword)
//         DB.add_user(req.body.email, req.body.username, hashedPassword)
//     } catch (err) {
//         console.log(err)
//         res.status(500).send()
//     }
//     finally{
//         res.send({status: 'success'})
//     }
// })
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))