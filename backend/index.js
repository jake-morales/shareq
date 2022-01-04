const express = require('express')
const app = express()
const port = 3001

app.use(express.static("../frontend/build"))

app.get('/api', (req, res) => {
    res.send('Confirmed backend hit!')
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})