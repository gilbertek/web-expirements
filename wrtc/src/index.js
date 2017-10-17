var app      = require('express')();
var hostname = '127.0.0.1';
const port   = 8090;

var http     = require('http').Server(app);
var io       = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('A user connected');
});

http.listen(port, hostname);
