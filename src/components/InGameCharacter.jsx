import { Box, Card, Typography, Input, Button } from "@mui/material";
import React from "react";

const inGameCharacter = ({ character, gameCharacters, setGameCharacters }) => {

  const removeChar = () => {
    let newChars = gameCharacters.filter(newCharacters => newCharacters.id != character.id)
    setGameCharacters(newChars)
  }

  return (
    <Card sx={{ display: 'flex', padding: '10px', margin: '10px' }}>
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
        <Box sx={{ display: 'flex' }}>
          <label>Initiative</label>
          <Input sx={{ width: '30px' }} value={character.initiative}>
          </Input>

          <label>HP</label>
          <Input sx={{ width: '30px' }} value={character.hp}>
          </Input>
          
          <label>AC</label>
          <Input sx={{ width: '30px' }} value={character.ac}>
          </Input>
        </Box>
      </Box>
      <Box sx={{display:'flex', flexDirection:'column'}}>
        <Button onClick={removeChar} variant="contained" color="error" type={'trash'}><i className="fa-solid fa-trash-can"></i></Button>
        <Button>?</Button>
      </Box>
    </Card>
  )
};

export default inGameCharacter;