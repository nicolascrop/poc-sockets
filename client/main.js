function AppPrint(msg) {
  const el = document.getElementById('list');
  const li = document.createElement('li');
  li.innerText = msg;
  el.appendChild(li);
}

document.getElementById('send').addEventListener('click', function() {
  AppPrint('send msg');
  socket.emit('client_msg', 'client_message');
});

const socket = io('http://localhost:8080', {
  path: '/sockets'
});

socket.on('connect', function(msg){
  AppPrint('connected');
});

socket.on('server_msg', function(msg){
  AppPrint('server_msg -- ' + JSON.stringify(msg));
})

socket.on('error', function(err){
  console.error(err)
  AppPrint('error -- ' + err);
});

socket.on('connect_error', function(err){
  console.error(err)
  AppPrint('connect_error -- ' + err);
});