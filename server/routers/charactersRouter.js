const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post('/characters', (req, res) => {
    console.log('req.body', req.body)
    const character = req.body;

    db.query(`INSERT INTO characters (user_id, charname, level, race, class, hp, ac, charsheet) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, 
    [character.userId, character.newCharName, character.newCharLevel, character.newCharRace, character.newCharClass, character.newCharHp, character.newCharAc, character.newCharSheet])

    db.query(`SELECT * FROM characters WHERE user_id = $1`, [character.userId])
    .then(data => {
      res.send(data.rows)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
    // res.send(req.body)
  })

  return router;
}