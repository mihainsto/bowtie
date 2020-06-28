const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const DB = require('./database/database') 
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/auth', (req, res) =>{

    res.send('auth')
})

app.post('/register', async (req, res) => {
    try {
        console.log(req.body)
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        DB.add_user(req.body.email, req.body.username, hashedPassword)
    } catch (err) {
        console.log(err)
        res.status(500).send()
    }
    finally{
        res.send({status: 'success'})
    }
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))