const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Passionate Stars</h1>')
})
app.get('*', (req, res) => {
    res.send('<h1>Welcome to Passionate Stars</h1><p>Sorry, requested page didn\'t found.')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))