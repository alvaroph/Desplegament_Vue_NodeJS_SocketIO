import express from 'express';

import cors from 'cors';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
const app = express();

app.use(cors());
/*app.use(cors({
  origin: 'http://localhost:4000', // Replace with the actual origin of your client application
  methods: ['GET', 'POST'],
}));*/

/*** LES SEGUENTS LINIES SON IMPORTANTS PER PODER TENIR RUTES DE CLIENT */
/*import history from 'connect-history-api-fallback'
const app = express();
const staticFileMiddleware = express.static('../dist');
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);*/
/*********FINAL******************* */

const server = createServer(app);
const io = new Server(server,{
  cors: {
    origin: '*', // Replace with the actual origin of your client application
    methods: ['GET', 'POST'],
  }
});
/*
app.use(express.static('public'))
app.use(express.static('../dist'))
app.get('/', (req, res) => {
  res.sendFile(new URL('./index.html', import.meta.url).pathname);
});
*/

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
});
