import React from "react";
import chest from '../images/treasure.png'
import { Box, TextField, Typography, FormControlLabel, Button } from '@mui/material';
import { CheckBox } from '@mui/icons-material';

const Login = () => {
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
        Sign in
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
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
      <FormControlLabel control={<CheckBox defaultChecked />} label="Remember me" sx={{ margin: "10px" }} />
      <Button variant="contained" sx={{ margin: "10px" }}>Sign in</Button>
      <Box>
        <Button sx={{ textTransform: 'none', marginRight: '50px' }}>Forgot your password?</Button>
        <Button sx={{ textTransform: 'none' }}>Don't have an account? Sign Up</Button>
      </Box>

    </Box>
  )
};

export default Login;