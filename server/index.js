// You can send an existing server to use it instead of creating a new one
const io = require('socket.io')(8080, {
}).of('/sockets');

// On connection is the entry point
io.on('connection', function (socket) {
  console.log('new user connected, socketid', socket.id);
  socket.on('client_msg', (msg) => {
    console.log('new client_msg socket: ', socket.id, 'msg', msg);
  });
  socket.on('disconnect', () => {
    console.log('socket disconnected', socket.id);
  })
});


setInterval(() => {
  io.emit('server_msg', {
    type: 'important',
    content: 'server_msg'
  });
}, 1000 * 30);

