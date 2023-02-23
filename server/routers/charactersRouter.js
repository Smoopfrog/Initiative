const express = require("express");
const router = express.Router();


module.exports = (db) => {
  router.get("/characters", (req, res) => {
    const userId = req.query.userId;

    db.query(`SELECT * FROM characters WHERE user_id = $1`, [userId])
      .then((data) => {
        const characters = data.rows;
        res.send(characters);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // router.post("/characterImages", upload.single("CharacterImage"), async (req, res) => {
  //   let image = req.file.buffer.toString('base64')
  //   console.log(image)
  // })

  router.post("/characters", async (req, res) => {
    const character = req.body;
    await db.query(
      `INSERT INTO characters (user_id, charname, level, race, class, hp, ac, charsheet) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        character.userId,
        character.newCharName,
        character.newCharLevel,
        character.newCharRace,
        character.newCharClass,
        character.newCharHp,
        character.newCharAc,
        character.newCharSheet,
      ]
    );

    db.query(`SELECT * FROM characters WHERE user_id = $1`, [character.userId])
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.delete("/characters", async (req, res) => {
    const userId = req.query.userId;
    const charId = req.query.charId;

    await db.query(`DELETE FROM characters WHERE user_id = $1 AND id = $2`, [
      userId,
      charId,
    ]);

    db.query(`SELECT * FROM characters WHERE user_id = $1`, [userId])
      .then((data) => {
        const characters = data.rows;
        res.send(characters);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
