const express = require("express");
const router = express.Router();

module.exports = () => {
  router.post('/users', (req, res) => {
    console.log(req.body);
    
    res.send(req.body);
  });

  return router;
};