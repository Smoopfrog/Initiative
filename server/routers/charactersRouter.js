const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get('/characters', (req, res) => {
    console.log('req.body', req.body)
  })

  return router;
}