import { Box, Button, Collapse, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import io from "socket.io-client";
import { useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
const socket = io.connect("http://localhost:3001");

const ServerTab = () => {
  const [openJoinServer, setOpenJoinServer] = useState(false);
  const [openHostServer, setOpenHostServer] = useState(false);
  const [roomName, setRoomName] = useState('')
  const user = useSelector(selectUser);


  const joinRoom = () => {
    if (roomName !== "") {
      socket.emit("join_room", roomName);
      // setShowChat(true);
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
    <Box sx={{marginTop:'10px'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Button variant="contained" onClick={joinServerForm}>
          Join Game
        </Button>
        <Button variant="contained" onClick={hostServerForm}>
          Host Game
        </Button>
      </Box>
      <Collapse in={openJoinServer} sx={{marginTop:'10px'}}>
        <Box sx={{ border: '10px grey' }}>
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

      </Collapse>

      <Collapse in={openHostServer}>
        <Typography>
          Host a Server
        </Typography>
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
        <Button variant="contained">
          Host
        </Button>
      </Collapse>
    </Box>
  )
}

export default ServerTab;