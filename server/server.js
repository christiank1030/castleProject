const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('client'))

const { getHTML, getCSS, getJs } = require('./controller')

app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJs)


app.listen(4000, console.log('Server running on 4000'))