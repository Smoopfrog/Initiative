import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, TextField, Typography, Button, Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import chest from '../images/treasureOpen.png'

const Signup = ({ setHomepage }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  useEffect(() => {
    setUsernameError(false)
  }, [username])

  const onSignUp = e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }

    const userData = {
      username: username,
      password: password
    }

    axios.post('/users', userData)
      .then(function (response) {
        if (response.data.length) {
          console.log('Username taken')
          setUsernameError(true)
        } else {
          console.log('sign in')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
      <Collapse in={usernameError}>
        <Alert severity="error" action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setUsernameError(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
          sx={{ mb: 2 }}
        >
          Username taken!
        </Alert>
      </Collapse>
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
      <Collapse in={passwordError}>
        <Alert severity="error" action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setPasswordError(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
          sx={{ mb: 2 }}
        >
          Passwords do not match!
        </Alert>
      </Collapse>
      <Button type='submit' variant="contained" sx={{ margin: "10px" }}>Sign Up</Button>
      <Box width="100%" display="flex" justifyContent='center'>
        <Button onClick={() => setHomepage('signin')} sx={{ textTransform: 'none' }}>Already have an account? Sign In</Button>
      </Box>

    </Box>
  )
};

export default Signup;