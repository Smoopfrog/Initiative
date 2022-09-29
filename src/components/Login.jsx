import React, { useState, useEffect } from "react";
import chest from '../images/treasure.png'
import { Box, TextField, Typography, FormControlLabel, Button, Collapse, IconButton, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CheckBox } from '@mui/icons-material';
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn } from "../slices/userSlice";
import { setCharacters } from "../slices/charactersSlice";



const Login = ({ setHomepage }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [credentialsError, setCredentialsError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setCredentialsError(false)
  }, [username, password])

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  };

  const handlePasswordChange = e => {
    setpassword(e.target.value)
  };

  const getUserCharacters = id => {
    const params = {
      userId: id
    }

    axios.get('/characters', {params})
      .then(res => {
        console.log(res.data)
        dispatch(
          setCharacters(res.data)
        )
      })
      .catch(err => {console.log(err)})
  }

  const login = (e) => {
    e.preventDefault();

    const params = {
      username: username,
      password: password
    }

    axios.get('/users', { params })
      .then(function (response) {
        if (response.data.length) {
          dispatch(
            logIn(response.data[0])
          )
          getUserCharacters(response.data[0].id)
          setHomepage('signedIn')
          return
        }
        setCredentialsError(true)
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
      <Collapse in={credentialsError}>
        <Alert severity="error" action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setCredentialsError(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
          sx={{ mb: 2 }}
        >
          Invalid Credentials
        </Alert>
      </Collapse>
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