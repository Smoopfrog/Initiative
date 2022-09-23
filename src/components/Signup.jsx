import React from "react";
import chest from '../images/treasureOpen.png'
import { Box, TextField, Typography, Button } from '@mui/material';
import { useState } from "react";

const Signup = ({ setHomepage }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const onSignUp = e => {
    e.preventDefault()
    console.log("hello")
  };

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  };

  const handlePasswordChange = e => {
    setpassword(e.target.value)
  };

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value)
  };

  return (
    <Box
      component="form"
      onSubmit={onSignUp}
      sx={{
        width: { xs: '100vw', md: '40vw' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px',
        height: '70vh',
        justifyContent: 'center'
      }}
    >
      <img src={chest} width="50" height="50" />
      <Typography margin="10px" component="h1" variant="h4">
        Sign up
      </Typography>
      <TextField
        value={username}
        onChange={handleUsernameChange}
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
      />
      <TextField
        value={password}
        onChange={handlePasswordChange}
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
      />
      <TextField
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        id="confirmPassword"
      />
      <Button type='submit' variant="contained" sx={{ margin: "10px" }}>Sign Up</Button>
      <Box width="100%" display="flex" justifyContent='center'>
        <Button onClick={() => setHomepage('login')} sx={{ textTransform: 'none' }}>Already have an account? Sign In</Button>
      </Box>

    </Box>
  )
};

export default Signup;