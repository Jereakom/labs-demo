var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('AYY LMAO')
})

app.listen(3000)
