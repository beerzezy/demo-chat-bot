const express = require('express')
const request = require('request-promise')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors({ origin: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message'
const CAToken = 'vq+NsZUgAlk1s4gg06iJegVgwdfFGqMNARZ6+GCxdx74oIkHrr62km3xeYgjBXBQbzCHfDqymW24jMCk/sKcef6Ie74Yot7FSCZGbk7MWJ09MBlHLe4+nnnu87ab2EHFtwThkBiMSMOH6JhJJcC7+gdB04t89/1O/w1cDnyilFU='
const LINE_HEADER = {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${CAToken}`
}

const sendMessage = (bodyResponse, res) => {
    //let userId = bodyResponse.events[0].source.userId
    let replyToken = bodyResponse.events[0].replyToken
    //let message = bodyResponse.events[0].message.text
    let messageStr = JSON.stringify(bodyResponse)

    return request.post({
        uri: `${LINE_MESSAGING_API}/reply`,
        headers: LINE_HEADER,
        body: JSON.stringify({
            replyToken: replyToken,
            messages: [{
                type: 'text',
                text: messageStr
            }]
        })
    }).then(() => {
        return res.status(200).send('Done')
    }).catch((error) => {
        return Promise.reject(error)
    })
}

app.post('/webhookLineBot', (req, res) => {
    if (typeof(req.body.events[0].message.type) == 'undefined' || req.body.events[0].message.type !== 'text') {
        const ret = { message: 'Text not found' }
        return res.status(400).send(ret)
    }
    sendMessage(req.body, res)
    res.status(200)
})

app.get('/', (req, res) => {
    //res.json({ message: 'H! Chat Bot' })
    res.send('Welcome to Chat Bot API...')
})
app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})

