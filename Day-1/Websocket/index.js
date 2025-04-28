import dotenv from "dotenv";
import app from "./app.js";
import http from "http";
import { Server } from "socket.io";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

/**
 * @description
 * Create express app
 * Create http server and pass the express app into http server
 */
const server = http.createServer(app);

/**
 * @description
 * Create Socket.io instance
 * pass the http server into instance
 */
const io = new Server(server);

// Handle socket.io
// socket: client
// io.on("connection", (socket) => {
//   console.log(`A new user connected: `, socket.id);
// });

io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    console.log(`A new user ${socket.id} message: `, message);
    //   Send message to other users
    //   Agr frontend/kisi bhi user se koi message aata hai, sabhi ko de do
    io.emit(`Message`, message);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}`);
});
