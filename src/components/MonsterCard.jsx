import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { string } from "prop-types";
import React from "react";

const MonsterCard = ({ monster }) => {
  console.log(monster)
  const modifierCalculator = stat => Math.floor((stat - 10) / 2)

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
        <Typography>
          Speed {monster.speed.walk}
        </Typography>
      </Box>
      <Box>
        STR {monster.strength} ({modifierCalculator(monster.strength)})
      </Box>
      <Box>
        DEX {monster.dexterity} ({modifierCalculator(monster.dexterity)})
      </Box>
      <Box>
        CON {monster.constitution} ({modifierCalculator(monster.constitution)})
      </Box>
      <Box>
        INT {monster.intelligence} ({modifierCalculator(monster.intelligence)})
      </Box>
      <Box>
        WIS {monster.wisdom} ({modifierCalculator(monster.wisdom)})
      </Box>
      <Box>
        CHA {monster.charisma} ({modifierCalculator(monster.charisma)})
      </Box>
    </Card>
  )
};

export default MonsterCard;