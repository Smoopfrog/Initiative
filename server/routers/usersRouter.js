const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post('/users', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(`SELECT * FROM users WHERE username = $1`, [username])
      .then(data => {
        const users = data.rows;
        
        if (users.length) {
          res.send(users);
        } else {
          db.query(`INSERT INTO users (username, password) VALUES ($1, $2)`, [username, password]);
          res.send(users);
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};