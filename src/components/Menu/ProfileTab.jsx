import { Box } from "@mui/material";
import React from "react";
import { useSelector } from 'react-redux';
import { selectUser, logOut } from '../../slices/userSlice';
import { useDispatch } from "react-redux";

const ProfileTab = ({ setHomepage }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logOut())
    setHomepage('signin')
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  }}>
      <h1>Profile</h1>
      <h2>{user.username}</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </Box>
  )
}

export default ProfileTab;