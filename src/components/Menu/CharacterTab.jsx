import React from "react";
import Character from "../Character/Character";
import PlayerCharacter from "../PlayerCharacter";
import useApplicationData from "../../hooks/useApplicationData";
import { Box, Stack } from "@mui/material";

const CharacterTab = () => {
  const { state } = useApplicationData()

  const charArray = state.map(character => {
    console.log(character)
    return (
      <PlayerCharacter
        key={character.id}
        id={character.id}
        img={character.img}
        name={character.name}
        level={character.level}
        race={character.race}
        class={character.class}
        charSheetUrl={character.charSheetUrl}
        hp={character.hp}
        ac={character.ac}
        initiative={character.initiative}
      />
    )
  })
  return (
    <Box>
      <Stack>
        {charArray}
      </Stack>
    </Box>
  )
}

export default CharacterTab;