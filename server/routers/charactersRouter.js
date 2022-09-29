const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post('/characters', (req, res) => {
    console.log('req.body', req.body)
    res.send(req.body)
  })

  return router;
}