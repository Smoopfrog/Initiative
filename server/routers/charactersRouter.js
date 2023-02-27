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

  router.post("/characters", async (req, res) => {
    const character = req.body;
    
    await db.query(
      `INSERT INTO characters (user_id, name, level, race, class, hp, ac, charsheet) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        character.userId,
        character.name,
        character.level,
        character.race,
        character.clas,
        character.hp,
        character.ac,
        character.charSheet,
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

  router.patch("/characters", async (req, res) => {
    const character = req.body;
    const userId = req.body.userId;

    await db.query(
      `UPDATE characters
      SET name = $1, 
      level = $2,
      race = $3,
      class = $4,
      hp = $5,
      ac = $6,
      charsheet = $7
      WHERE id = $8`,
      [
        character.name,
        character.level,
        character.race,
        character.clas,
        character.hp,
        character.ac,
        character.charSheet,
        character.id,
      ]
    );

    db.query(`SELECT * FROM characters WHERE user_id = $1`, [userId])
      .then((data) => {
        const characters = data.rows;
        res.send(characters);
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
