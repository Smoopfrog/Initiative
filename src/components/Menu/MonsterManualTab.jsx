import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const MonsterManualTab = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearchTextChange = event => {
    setSearchText(event.target.value)
  };

  const searchMonsterManual = async () => {
    const monster = searchText.trim().replace(/\s+/g, '-').toLowerCase();
    const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${monster}`)
    const data = await response.json();
    setSearchResults(data)
    console.log(data)
  };

  return (
    <Box>
      <TextField id="outlined-basic" label="Search" variant="outlined" value={searchText} onChange={handleSearchTextChange} />
      <Button variant="contained" color="success" onClick={searchMonsterManual}>Search</Button>
    </Box>
  )
};

export default MonsterManualTab;


