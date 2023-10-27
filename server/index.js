import express from 'express';

import cors from 'cors';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
const app = express();

app.use(cors());


/*** LES SEGUENTS LINIES SON IMPORTANTS PER PODER TENIR RUTES DE CLIENT */
/* ESTO ES IMPORTANTE CUANDO DESPLEGAMOS EN PRODUCCION */
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
ESTO ES SI QUEREMOS QUE NODE SIRVA A VUE
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

server.listen(3013, () => {
  console.log('Server running at http://localhost:3013');
});
