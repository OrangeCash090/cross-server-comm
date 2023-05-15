const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3001
const path = require('path');

app.use(bodyParser.json())

var PlayerPosition = null
var Players = {}

// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/getdata', function(req, res) {
  res.send({PlayerPosition: PlayerPosition, Players: Players})
});

app.post('/senddata', function (req, res) {
  PlayerPosition = req.body.PlayerPosition
  Players = req.body.Players
  res.send("Good")
});

app.listen(port, () => {
  // do nothing
})
