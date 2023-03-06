const cors = require("cors");
const express = require("express");
const app = express();
const db = require("./db.js");
const path = require("path");
const port = process.env.PORT || 7001;
const usersRoutes = require("./routers/usersRouter.js");
const characterRoutes = require("./routers/charactersRouter.js");

// const http = require("http");
// const server = http.createServer(app);

// middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

console.log(__dirname);
console.log(path.join(__dirname, "client/build"));

db.connect();
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", usersRoutes(db));
app.use("/", characterRoutes(db));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// server.listen(3001, () => {
//   console.log("SERVER RUNNING");
// });
