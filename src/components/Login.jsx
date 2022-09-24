import React, { useState } from "react";
import chest from '../images/treasure.png'
import { Box, TextField, Typography, FormControlLabel, Button } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import axios from "axios";

const Login = ({ setHomepage }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  };

  const handlePasswordChange = e => {
    setpassword(e.target.value)
  };

  const login = (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password
    }

    axios.get('/users', userData)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Box
      onSubmit={login}
      component="form"
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
        Sign in
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
      <FormControlLabel control={<CheckBox defaultChecked />} label="Remember me" sx={{ margin: "10px" }} />
      <Button type="submit" variant="contained" sx={{ margin: "10px" }}>Sign in</Button>
      <Box width="100%" display="flex" justifyContent='space-between'>
        <Button sx={{ textTransform: 'none' }}>Forgot your password?</Button>
        <Button onClick={() => setHomepage('signup')} sx={{ textTransform: 'none' }}>Don't have an account? Sign Up</Button>
      </Box>
    </Box>
  )
};

export default Login;