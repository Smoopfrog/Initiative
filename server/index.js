const express = require('express');
const app = express();
const usersRoutes = require('./routers/usersRouter.js');
const port = 7001;


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/', usersRoutes());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})