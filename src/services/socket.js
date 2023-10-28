import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  chat: [],
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3013";

export const socket = io(URL);


socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("chat message", (...args) => {
  state.chat.push(args);
});
