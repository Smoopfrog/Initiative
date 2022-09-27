import { Box, Typography, Card, Link } from "@mui/material";
import React from "react";
import token from "../images/token.png"
const PlayerCharacter = () => {
  return (
    <Card sx={{display:'flex', width: '90%', margin:'10px', padding:'10px'}}>
      <img src={token} width='20%'/>
      <Box>
        <Typography variant="h5" >Character Name</Typography>
        <Typography variant="h12">Lv. 99 Race Class</Typography>
        <br />
        <Link href="https://www.dndbeyond.com/characters/13662564" target="_blank" rel="noopener noreferrer">Character Sheet</Link>
      </Box>
    </Card>
  )
}

export default PlayerCharacter;