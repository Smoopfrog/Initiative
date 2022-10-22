import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import InGameCharacter from "./InGameCharacter";
import Tracker from "./Tracker";
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:3001");

const GameRoom = ({setGameCharacters, gameCharacters}) => {
  console.log('gameCharacters in game room', gameCharacters)
  const sortByInitiative = characters => {
    return characters.sort((a, b) => b.initiative - a.initiative)
  }
  // console.log(gameCharacters)
  // let sortedCharacters;
  let sortedCharacters = sortByInitiative(gameCharacters)
  // useEffect(()=> {
  //   console.log('hello')
  //   const sortedCharacters = gameCharacters.sort((a, b) => b.intiative - a.intiative)
  // }, [gameCharacters])
  const inGameChars = sortedCharacters.map(character => {
    return (
      <InGameCharacter character={character} gameCharacters={gameCharacters} setGameCharacters={setGameCharacters}/>
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