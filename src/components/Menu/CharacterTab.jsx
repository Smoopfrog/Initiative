import React from "react";
import Character from "../Character/Character";
import PlayerCharacter from "../PlayerCharacter";
import useApplicationData from "../../hooks/useApplicationData";
import { Box, Stack } from "@mui/material";

const CharacterTab = () => {
  const { state, statChange, addChar, removeChar, nextChar, prevChar } = useApplicationData()

    const charArray = state.map(character => {
      console.log(character)
    return (
      <Character
        key={character.id}
        id={character.id}
        name={character.name}
        hp={character.hp}
        ac={character.ac}
        initiative={character.initiative}
        selected={character.selected}
        statChange={statChange}
        removeChar={removeChar}
      />
    )
  })
  return (
    <Box>
      <Stack>
        {charArray}
        <PlayerCharacter />
      </Stack>
    </Box>
  )
}

export default CharacterTab;