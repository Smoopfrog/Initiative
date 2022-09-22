const express = require('express');
const app = express();
const port = 7001

// app.get('/', (req, res) => {
//   res.send()
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})