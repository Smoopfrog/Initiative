import { Box, Button, Collapse, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import GameRoom from "../GameRoom.jsx";
import { useSelector } from 'react-redux';
import { selectUser, joinGame, leaveGame, inGame } from '../../slices/userSlice';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const ServerTab = () => {
  const [openJoinServer, setOpenJoinServer] = useState(false);
  const [openHostServer, setOpenHostServer] = useState(false);
  const [roomName, setRoomName] = useState('')
  const [showGame, setShowGame] = useState(false)
  const user = useSelector(selectUser);
  const userInGame = useSelector(inGame);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowGame(userInGame)
  }, [])

  const joinRoom = () => {
    if (roomName !== "") {
      socket.emit("join_room", roomName);
      setShowGame(true);
      dispatch(
        joinGame(roomName)
      );
    }
  };

  const leaveRoom = () => {
    socket.emit("leave", roomName);
    dispatch(
      leaveGame()
    );
    setShowGame(false);
  };

  const joinServerForm = () => {
    setOpenJoinServer(!openJoinServer)
    setOpenHostServer(false)
    setRoomName('')
  }

  const hostServerForm = () => {
    setOpenHostServer(!openHostServer)
    setOpenJoinServer(false)
    setRoomName('')
  }

  return (
    <Box sx={{ marginTop: '10px' }}>
      {!showGame ? (
        <Box>
          <Typography>
            Join a Server
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Server Name"
              type="text"
              variant="standard"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
            <Button variant="contained" onClick={joinRoom}>
              Join
            </Button>
          </Box>
        </Box>
      ) : (

        <Box>
          <Button onClick={leaveRoom}>Leave Game</Button>
          <GameRoom />
        </Box>
      )}
    </Box>
  )
}

export default ServerTab;