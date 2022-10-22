import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const MonsterManualTab = () => {


  return (
    <Box>
      <TextField id="outlined-basic" label="Search" variant="outlined" value={searchText} onChange={handleSearchTextChange} />
      <Button variant="contained" color="success">Search</Button>
    </Box>
  )
};

export default MonsterManualTab;


