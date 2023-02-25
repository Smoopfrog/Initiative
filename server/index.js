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

server.listen(3001, () => {
  console.log("SERVER RUNNING")
});