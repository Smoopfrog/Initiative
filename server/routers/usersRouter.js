const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

module.exports = (db) => {
  router.get("/users", async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    await db
      .query(`SELECT * FROM users WHERE username = $1`, [username])
      .then((data) => {
        const user = data.rows[0];
        const bcrypted = bcrypt.compare(password, user.password);

        if (bcrypted) {
          res.send(user);
        } else {
          res.send([])
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/loggedIn", (req, res) => {
    const username = req.query["0"];

    db.query(`SELECT * FROM users WHERE username = $1`, [username])
      .then((data) => {
        const users = data.rows;
        res.send(users);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/users", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    db.query(`SELECT * FROM users WHERE username = $1`, [username])
      .then((data) => {
        const users = data.rows;

        if (users.length) {
          res.send(users);
        } else {
          db.query(`INSERT INTO users (username, password) VALUES ($1, $2)`, [
            username,
            hash,
          ]);
          res.send({ username, password });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
