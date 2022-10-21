import { Box, Card, Typography, Input, Button } from "@mui/material";
import React from "react";

const inGameCharacter = ({character}) => {
  return (
    <Card>
      <Box>
        <img></img>
      </Box>
      <Box>
        <Box>
          <Typography>
            {character.charName}
          </Typography>
          <Typography>
            Lv. {character.level} {character.race} {character.class} 
          </Typography>
        </Box>
        <Box>
          <Input value={character.initiative}>
          </Input>
          <Input value={character.hp}>
          </Input>
          <Input value={character.ac}>
          </Input>
        </Box>
      </Box>
      <Box>
        <Button>X</Button>
        <Button>?</Button>
      </Box>
    </Card>
  )
};

export default inGameCharacter;