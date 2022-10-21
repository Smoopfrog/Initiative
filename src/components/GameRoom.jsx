import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import InGameCharacter from "./InGameCharacter";
import Tracker from "./Tracker";
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:3001");

const GameRoom = ({setGameCharacters, gameCharacters}) => {
  console.log('gameCharacters in game room', gameCharacters)

  console.log(gameCharacters)
  const inGameChars = gameCharacters.map(character => {
    return (
      <InGameCharacter charName={character.charName} />
    )
  })
  return (
    <Box> 
      <Tracker gameCharacters={gameCharacters} />
      {inGameChars}
    </Box>
  )
}

export default GameRoom;