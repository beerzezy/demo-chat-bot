const express = require('express')
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

app.get('/', (req, res) => {
    //res.json({ message: 'BEER!' })
    res.send('Welcome to Chat Bot API...')
})

// const sendMessage = (bodyResponse) => {
//     let userId = bodyResponse.events[0].source.userId
//     let replyToken = bodyResponse.events[0].replyToken
//     let message = bodyResponse.events[0].message.text

//     return request.post({
//         uri: `${LINE_MESSAGING_API}/reply`,
//         headers: LINE_HEADER,
//         body: JSON.stringify({
//             replyToken: replyToken,
//             messages: [{
//                 type: 'text',
//                 text: userId
//             }]
//         })
//     });
// }

app.post('/webhook', (req, res) => {
    const text = req.query


    // if (text !== undefined && text.trim() !== ``) {
    //     const ret = { message: 'Text not found' };
    //     return res.status(400).send(ret);
    // }

    // sendMessage(req.body)
    // res.status(200).send({ message: 'Done' })
    console.log(text)
    res.status(200)
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})

