const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3001
const path = require('path');

app.use(bodyParser.json())

var PlayerPosition = null
var PlayerChat = null
var OtherChat = null
var Players = {}

// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/getdata', function(req, res) {
  res.send({PlayerPosition: PlayerPosition, Players: Players, PlayerChat: PlayerChat, OtherChat: OtherChat})
});

app.post('/senddata', function (req, res) {
  if (req.body.PlayerPosition != null) {
    PlayerPosition = req.body.PlayerPosition
  }
  if (req.body.Players != null) {
    Players = req.body.Players
  }
  if (req.body.PlayerChat != null) {
    PlayerChat = req.body.PlayerChat
  }
  if (req.body.OtherChat != null) {
    OtherChat = req.body.OtherChat
  }
  res.send("Good")
});

app.listen(port, () => {
  // do nothing
})
