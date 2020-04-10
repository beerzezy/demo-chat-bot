const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    //res.json({ message: 'BEER!' })
    res.send('Welcome to Chat Bot API...')
})

app.post('/webhook', (req, res) => {
    console.log(req.body.events[0].source.userId)
    res.status(200).send({ status: '200 OK' })
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})

