import { Box, Button, Card, Link, Typography } from "@mui/material";
import React from "react";

const MonsterCard = ({ monster, setGameCharacters }) => {
  const capitalize = (str) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return "";
  };

  let subtype = monster.subtype;

  if (subtype) {
    subtype = `(${capitalize(subtype)})`;
  }

  let monsterImg = monster.image;

  if (monsterImg) {
    monsterImg = `https://www.dnd5eapi.co${monster.image}`
  }
  const rollTwentyLink = `https://roll20.net/compendium/dnd5e/${monster.name}`;
  const char = {
    id: Math.random(),
    ac: monster.armor_class,
    charName: monster.name,
    charSheetUrl: rollTwentyLink,
    hp: monster.hit_points,
    img: monsterImg,
    initiative: 0,
    race: capitalize(monster.type),
    class: subtype,
    selected: false,
  };

  const addCharacter = () => {
    setGameCharacters((prev) => [...prev, char]);
  };

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex" }}>
        {monster.image && (
          <img
            src={`https://www.dnd5eapi.co${monster.image}`}
            width="200"
            height="auto"
          />
        )}
        <Box
          sx={{ display: "flex", flexDirection: "column", marginLeft: "5px" }}
        >
          <Typography variant="h4">{monster.name}</Typography>
          <Typography>
            {monster.size} {capitalize(monster.type)}
            {monster.subtype && ` (${capitalize(monster.subtype)})`},{" "}
            {monster.alignment}{" "}
          </Typography>
          <Typography>Armor Class {monster.armor_class}</Typography>
          <Typography>
            Hit Points {monster.hit_points} ({monster.hit_points_roll})
          </Typography>
          <Link href={rollTwentyLink} target="_blank" rel="noopener noreferrer">
            Roll20 Link
          </Link>
        </Box>
      </Box>
      <Button
        onClick={addCharacter}
        variant="contained"
        sx={{ backgroundColor: "Green", color: "white" }}
      >
        <i className="fa-solid fa-plus"></i>
      </Button>
    </Card>
  );
};

export default MonsterCard;
