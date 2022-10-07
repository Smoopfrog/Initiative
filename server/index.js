const cors = require("cors");
const express = require('express');
const app = express();
const http = require("http");
const db = require('../db.js')
const usersRoutes = require('./routers/usersRouter.js');
const characterRoutes = require('./routers/charactersRouter.js')
const { Server } = require("socket.io");
const port = 7001;
const server = http.createServer(app);

db.connect();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/', usersRoutes(db));
app.use('/', characterRoutes(db));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Socket.io

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3006",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("leave", (data) => {
    socket.leave(data);
    console.log(`User with ID: ${socket.id} has left room: ${data}`);
  });
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING")
});