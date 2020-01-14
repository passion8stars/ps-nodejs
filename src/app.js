const express = require('express')
const path=require('path');
const hbs = require('hbs');
const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    //res.send('<h1>Welcome to Passionate Stars</h1>')
    res.render('index',{})
})
app.get('*', (req, res) => {
    console.log(req.params)
    //res.send('<h1>Welcome to Passionate Stars</h1>')
    res.render('index',{})
})
// app.get('*', (req, res) => {
//     res.send('<h1>Welcome to Passionate Stars</h1><p>Sorry, requested page didn\'t found.')
// })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))