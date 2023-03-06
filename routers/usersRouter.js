const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

module.exports = (db) => {
  router.get("/users", async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    let user;

    await db
      .query(`SELECT * FROM users WHERE username = $1`, [username])
      .then((data) => {
        user = data.rows[0];
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });

    let isValid;

    if (!user) {
      res.send(false);
      return;
    } else {
      isValid = await bcrypt.compare(password, user.password);
    }

    if (!isValid) {
      return res.send(false);
    } else {
      return res.send(user);
    }
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

    let userExists;

    await db
      .query(`SELECT * FROM users WHERE username = $1`, [username])
      .then((data) => {
        const user = data.rows;
        if (user.length) {
          res.send(false);
          userExists = true;
        } else {
          db.query(`INSERT INTO users (username, password) VALUES ($1, $2)`, [
            username,
            hash,
          ]);
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });


    if (!userExists) {
      db.query(`SELECT * FROM users WHERE username = $1`, [username])
        .then((data) => {
          const users = data.rows[0];
          res.send(users);
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    }
  });

  return router;
};
