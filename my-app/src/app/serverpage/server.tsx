import { Server as HttpServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = new HttpServer(nextHandler);
  const io = new IOServer(server);

  io.on('connection', (socket: Socket) => {
    socket.on('documentChange', (doc: string) => {
      io.emit('documentChange', doc);
    });
  });

  server.listen(port, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

