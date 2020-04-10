const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    //res.json({ message: 'BEER!' })
    res.send('Welcome to Chat Bot API...')
})

app.post('/webhook', (req, res) => {
    console.log('Request has been sent: ', req)
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})

