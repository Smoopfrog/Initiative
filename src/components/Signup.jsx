import React from "react";
import chest from '../images/treasureOpen.png'
import { Box, TextField, Typography,  Button } from '@mui/material';

const Signup = () => {
  return (
    <Box
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
        Sign up
      </Typography>
      <TextField
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
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        id="confirmPassword"
      />
      <Button variant="contained" sx={{ margin: "10px" }}>Sign Up</Button>
      <Box width="100%" display="flex" justifyContent='center'>
        <Button sx={{ textTransform: 'none' }}>Already have an account? Sign In</Button>
      </Box>

    </Box>
  )
};

export default Signup;