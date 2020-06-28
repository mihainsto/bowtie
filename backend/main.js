const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/auth', (req, res) =>{

    request = req.body
    
    res.send('auth')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))