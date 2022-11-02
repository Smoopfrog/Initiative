import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import InGameCharacter from "./InGameCharacter";
import Tracker from "./Tracker";
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:3001");

const GameRoom = ({ setGameCharacters, gameCharacters }) => {
  
  const sortByInitiative = characters => {
    return characters.sort((a, b) => b.initiative - a.initiative);
  };

  const inGameChars = gameCharacters.map(character => {
    return (
      <InGameCharacter key={character.id} character={character} gameCharacters={gameCharacters} setGameCharacters={setGameCharacters} />
    )
  })

  return (
    <Box>
      <div className="tracker">
        {/* {playerTurn(props)} */}
        <Button ><i class="fa-solid fa-arrow-left"></i></Button>
        <Button onClick={() => setGameCharacters(sortByInitiative(gameCharacters))} >Sort</Button>
        <Button ><i class="fa-solid fa-arrow-right"></i></Button>
      </div>
      {inGameChars}
    </Box>
  )
}

export default GameRoom;