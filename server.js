const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message'
const CAToken = 'vq+NsZUgAlk1s4gg06iJegVgwdfFGqMNARZ6+GCxdx74oIkHrr62km3xeYgjBXBQbzCHfDqymW24jMCk/sKcef6Ie74Yot7FSCZGbk7MWJ09MBlHLe4+nnnu87ab2EHFtwThkBiMSMOH6JhJJcC7+gdB04t89/1O/w1cDnyilFU='
const LINE_HEADER = {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${CAToken}`
}

app.get('/', (req, res) => {
    //res.json({ message: 'BEER!' })
    res.send('Welcome to Chat Bot API...')
})

app.post('/webhook', (req, res) => {
    console.log('req body : ', req.body)
    console.log('req events : ', req.body.events[0])
    console.log('source : ', req.body.events[0].source)
    res.status(200)
})


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})

