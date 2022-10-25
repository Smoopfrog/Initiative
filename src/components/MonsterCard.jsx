import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { string } from "prop-types";
import React from "react";

const MonsterCard = ({ monster }) => {
  console.log(monster)

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Card>
      {monster.image && <img src={`https://www.dnd5eapi.co${monster.image}`} />}
      <Typography>Goblin</Typography>
      <Typography>{monster.size} {capitalize(monster.type)}{monster.subtype && ` (${capitalize(monster.subtype)})`}, {monster.alignment} </Typography>
      <Box>
        <Typography>
          Armor Class {monster.armor_class}
        </Typography>
        <Typography>
          Hit Points {monster.hit_points} ({monster.hit_dice})
        </Typography>
      </Box>
    </Card>
  )
};

export default MonsterCard;