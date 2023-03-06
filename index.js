const cors = require("cors");
const express = require("express");
const app = express();
const http = require("http");
const db = require("./db.js");
const usersRoutes = require("./routers/usersRouter.js");
const characterRoutes = require("./routers/charactersRouter.js");
const path = require("path");
const port = 7001;
const server = http.createServer(app);

// middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}
console.log(__dirname)

db.connect();
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", usersRoutes(db));
app.use("/", characterRoutes(db));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
