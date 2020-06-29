var path = require('path')
var express = require('express')
var app = express()
var http = require('http').Server(app)
var DIST = path.resolve(__dirname, './public')

// サーバー立てる
http.listen(process.env.PORT || 4000, function() {
  console.log('listening on *:4000')
})

app.get('/', function(req, res) {
  res.sendFile(DIST + '/index.html')
  return
})

app.use(express.static(DIST))
