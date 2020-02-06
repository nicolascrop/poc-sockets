import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(8080, {namespace: 'sockets'})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  constructor () {
    setInterval(() => {
      this.server.emit('server_msg', {
        type: 'important',
        content: 'server_msg'
      });
    }, 1000 * 30);
  }

  async handleConnection(socket: Socket) {
    console.log('new connection socket', socket.id);
  }

  @SubscribeMessage('client_msg')
  findAll(socket: Socket, data: string): void {
    console.log('new client_msg socket: ', socket.id, 'msg', data);
  }
}