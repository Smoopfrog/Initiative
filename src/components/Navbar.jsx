import React from "react";
import { Box, AppBar } from "@mui/material";

const navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '50px', backgroundColor: 'lightblue' }}>
      <AppBar position="static">
      </AppBar>
    </Box>
  )
};

export default navbar;