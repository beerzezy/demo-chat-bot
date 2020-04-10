const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    //res.json({ message: 'BEER!' })
    res.send('Welcome to Chat Bot API...')
})

app.post('/webhook', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.status(200).send({ status: '200 OK' })
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})

