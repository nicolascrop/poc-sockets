# POC websocket

The purpose of this project is to explain how sockets works.
Websockets is a protocol used to create a tcp socket to communicate in real time, bidirectionnaly between client / server.

In this POC we will use an implementation by [Socket.io](https://socket.io/).
Socket.IO was here before the browser implemented websockets. In order to simulate websocket protocol, they used long polling connection (a long ajax request).
Now, socket.io use websocket if it is available and they fallback to long polling if it isn't.




