// ES6 import or TypeScript
import { io } from "socket.io-client";
const socket = io();
var vueRef = null;

// socket.on(..)
// socket.on(..)
// socket.on(..)
// socket.on(..)
socket.on('chat message', () => {vueRef.mensajesRecibidos++});

export function initSocket(vueObject) {
  vueRef = vueObject;
  console.log('initSocket');
}

export function enviarMensaje(mensaje) {
  console.log('enviarMensaje');
  console.log(mensaje);
  socket.emit('chat message', mensaje);
}

export async function getPeliculas(searchstring) {
  const response = await fetch(`http://www.omdbapi.com/?s=${searchstring}&apikey=19f8a30e`)
  const data = await response.json()
  return data.Search;
}

export async function infoDetallada(id) {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=19f8a30e`)
    const data = await response.json()
    return data;
  }