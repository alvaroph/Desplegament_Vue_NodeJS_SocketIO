import express from 'express';
import cors from 'cors';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
const app = express();

//Permetem que el servidor pugui rebre peticions de qualsevol origen
app.use(cors());

//Creem el servidor de Socket.io especificant que pot accedir qualsevol client
const server = createServer(app);
const io = new Server(server,{
  cors: {
    origin: '*', // Replace with the actual origin of your client application
    methods: ['GET', 'POST'],
  }
});

//Codi del servidor del chat
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3013, () => {
  console.log('Server running at http://localhost:3013');
});
