import express from "express";
import cors from "cors";
import { Server as SocketServer } from "socket.io";
import http from "http";
import "dotenv/config";
// process.loadEnvFile();

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*",
  },
});

// codigo con cors configurados
// const app = express();
// const server = http.createServer(app);
// const io = new SocketServer(server, {
//   cors: {
//     origin: process.env.URL,
//   },
// });

app.use(cors());

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    socket.broadcast.emit("message", {
      body: message,
      from: "Secret",
    });
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
