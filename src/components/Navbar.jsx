import React from "react";
import { Box, AppBar, IconButton, Button, Toolbar } from "@mui/material";
import CastleIcon from '@mui/icons-material/Castle';

const navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '50px' }}>
      <AppBar position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CastleIcon />
          </IconButton>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>

        </Toolbar>
      </AppBar>
    </Box>
  )


};

export default navbar;