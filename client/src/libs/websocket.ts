export interface IMessageSocket {
  sessionId: string;
  method: string;
  username?: string;
  figure?: IFigure;
  message?: string;
}

export interface IFigure {
  [key: string]: number | string;
}

const SOCKET_URL = "ws://paint-online-server.vercel.app:3001/";

const socket = new WebSocket(SOCKET_URL);

export function sendMessage(message: IMessageSocket) {
  socket.send(JSON.stringify(message));
}

export function subscribeMessage(callback: (msg: IMessageSocket) => void) {
  socket.addEventListener("message", (event: MessageEvent) => {
    const msg = JSON.parse(event.data);
    callback(msg);
  });
}
