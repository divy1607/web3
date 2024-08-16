import Peer from 'peerjs';
import { Message } from '../types/Message';

const peer = new Peer();

export function sendMessage(message: Message) {
  const conn = peer.connect('peer-id');
  conn.on('open', () => {
    conn.send(message);
  });
}

function isMessage(data: any): data is Message {
  return typeof data === 'object' && 'text' in data && 'timestamp' in data;
}

export function receiveMessage(callback: (msg: Message) => void) {
  peer.on('connection', (conn) => {
    conn.on('data', (data: unknown) => {
      if (isMessage(data)) {
        callback(data);
      } else {
        console.error('Received data is not a valid Message', data);
      }
    });
  });
}
