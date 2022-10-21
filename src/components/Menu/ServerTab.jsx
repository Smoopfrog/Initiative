import { Box, Button, Collapse, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import GameRoom from "../GameRoom.jsx";
import { useSelector } from 'react-redux';
import { selectUser, joinGame, leaveGame, inGame } from '../../slices/userSlice';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ServerTab = ({gameCharacters, setGameCharacters, socket}) => {
  const [openJoinServer, setOpenJoinServer] = useState(false);
  const [openHostServer, setOpenHostServer] = useState(false);
  const [roomName, setRoomName] = useState('')
  const [showGame, setShowGame] = useState(false)

  const user = useSelector(selectUser);
  const userInGame = useSelector(inGame);
  const dispatch = useDispatch();

  
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
    
    // useEffect(() => {
      socket.on("receive_character",  (data) => {
        console.log('socket data received', data)
        setGameCharacters((prev) => { console.log('prev', prev)
        return [...prev, data]})
      });
    // },[socket])
    
    useEffect(() => {
      setShowGame(userInGame)
    }, [])

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
          <GameRoom gameCharacters={gameCharacters} setGameCharacters={setGameCharacters} socket={socket} />
        </Box>
      )}
    </Box>
  )
}

export default ServerTab;