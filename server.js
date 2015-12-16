
//
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(process.env.PORT || 8000);

io.sockets.on('connection', function (socket) {
  console.log('new user connected!');
  socket.on('location', function (data) {
    io.sockets.emit('location', data);
  });
  socket.on('add-message', function (data) {
    io.emit('add-message', data);
  });

});

