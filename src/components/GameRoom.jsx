import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const GameRoom = () => {
  const [gameCharacters, setGameCharacters] = useState([])
  console.log(socket)
  useEffect(() => {
    socket.on("receive_character", (data) => {
      console.log('socket data received', data)
      setGameCharacters((list) => [...list, data]);
    });
  }, [socket])

  socket.on("receive_character", (data) => {
    console.log('hello')
    console.log('socket data received', data)
    gameCharacters((list) => [...list, data]);
  });
  // console.log(gameCharacters)
  return (
    <Box>
      Hello
    </Box>
  )
}

export default GameRoom;