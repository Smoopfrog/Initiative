import { Box, Card, Typography, Input, Button } from "@mui/material";
import React from "react";

const inGameCharacter = ({character, gameCharacters, setGameCharacters}) => {
  const removeChar = () => {
    let newChars = gameCharacters.filter(newCharacters => newCharacters.id != character.id )
    setGameCharacters(newChars)
  }

  return (
    <Card sx={{display: 'flex', padding: '10px', margin: '10px' }}>
      <Box>
        <img />
      </Box>
      <Box>
        <Box>
          <Typography variant='h3'>
            {character.charName}
          </Typography>
          <Typography variant='subtitle'>
            Lv. {character.level} {character.race} {character.class} 
          </Typography>
        </Box>
        <Box sx={{display:'flex'}}>
          <Input value={character.initiative}>
          </Input>
          <Input value={character.hp}>
          </Input>
          <Input value={character.ac}>
          </Input>
        </Box>
      </Box>
      <Box>
        <Button onClick={removeChar}>X</Button>
        <Button>?</Button>
      </Box>
    </Card>
  )
};

export default inGameCharacter;