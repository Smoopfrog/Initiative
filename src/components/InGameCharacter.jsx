import { Box, Card, Typography, Input, Button, Link, TextField } from "@mui/material";
import React, { useState } from "react";
import monsterSilhouette from "../images/MonsterSilhouette.png"

const InGameCharacter = ({ character, gameCharacters, setGameCharacters }) => {
  const [initiative, setInitiative] = useState(character.initiative);
  const [hp, setHp] = useState(character.hp);
  const [ac, setAc] = useState(character.ac);


  const removeChar = () => {
    let newChars = gameCharacters.filter(newCharacters => newCharacters.id != character.id)
    setGameCharacters(newChars)
  }

  const changeInitiative = (event) => {
    setInitiative(event.target.value)
    character.initiative = event.target.value;
  }

  const changeHp = event => {
    setHp(event.target.value)
  }

  const changeAc = event => {
    setAc(event.target.value)
  }

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px', margin: '10px' }}>
      <Box sx={{display: 'flex'}}>
        <Box sx={{ display: 'flex' }}>
          {character.img ? <img src={character.img} width='25%' /> : <img src={monsterSilhouette} width='25%' />}
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h5" >{character.charName}</Typography>
            <Typography variant="h12">{character.level && ` Lv. ${character.level}`} {character.race} {character.class}</Typography>
            {character.charSheetUrl && <Link href={character.charSheetUrl} target="_blank" rel="noopener noreferrer">Character Sheet</Link>}
          </Box>

        </Box>
        <Box sx={{ display: 'flex', width: '40%' }}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '10px black'}}>
              <label>Initiative</label>
              <TextField type='number' step='1' value={initiative} onChange={changeInitiative} sx={{ width: '50px', textAlignLast: 'center'  }} />
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlignLast: 'center'}}>
              <label>HP</label>
              <TextField type='number' step='1' value={hp} onChange={changeHp} sx={{ width: '50px' }} />
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlignLast: 'center'}}>
              <label>AC</label>
              <TextField type='number' step='1' value={ac} onChange={changeAc} sx={{ width: '50px' }} />
            </Box>
          </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button onClick={removeChar} variant="contained" color="error" type={'trash'}><i className="fa-solid fa-trash-can"></i></Button>
        <Button>?</Button>
      </Box>
    </Card>
  )
};

export default InGameCharacter;