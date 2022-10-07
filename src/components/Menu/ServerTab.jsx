import { Box, Button, Collapse, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import GameRoom from "../GameRoom.jsx";
import { useSelector } from 'react-redux';
import { selectUser, joinGame, leaveGame } from '../../slices/userSlice';
import io from "socket.io-client";
import { useDispatch } from "react-redux";
const socket = io.connect("http://localhost:3001");

const ServerTab = () => {
  const [openJoinServer, setOpenJoinServer] = useState(false);
  const [openHostServer, setOpenHostServer] = useState(false);
  const [roomName, setRoomName] = useState('')
  const [showGame, setShowGame] = useState(false)
  const user = useSelector(selectUser);
  const dispatch = useDispatch()


  const joinRoom = () => {
    if (roomName !== "") {
      socket.emit("join_room", roomName);
      setShowGame(true);
      dispatch(
        joinGame()
      );
    }
  };

  const leaveRoom = () => {
    if (roomName !== "") {
      socket.emit("leave", roomName);
      setShowGame(false);
      dispatch(
        leaveGame()
      );
    }
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
          <GameRoom/>
        </Box>
      )}
    </Box>
  )
}

export default ServerTab;