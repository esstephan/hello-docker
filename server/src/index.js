const express = require('express')
const app = express()
const port = 3200

app.get('/', (req, res) => {
    res.send('Hello Docker my friend and foe!')
})

app.listen(port, () => {
    console.log(`hello-docker listening at http://localhost:${port}`)
})