const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/auth', (req, res) =>{

    return("AUTH")
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))