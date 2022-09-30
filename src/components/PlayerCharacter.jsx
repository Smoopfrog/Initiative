import { Box, Typography, Card, Link, Button } from "@mui/material";
import React from "react";
import halfling from "../images/Ivan_Kaslov-0.webp"
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCharacters } from "../slices/charactersSlice";

const PlayerCharacter = (props) => {
  const dispatch = useDispatch();

  const deleteChar = async () => {
    const params = {
      userId: props.userId,
      charId: props.id
    }

    await axios.delete('/characters', {params})
      .then(res => {
        dispatch(
          setCharacters(res.data)
        )
      })
      .then(err => console.log(err))
  }

  return (
    <Card sx={{ display: 'flex', justifyContent:'space-between', width: '90%', margin: '10px', padding: '10px', background: 'oldlace' }}>
      <Box sx={{display:'flex'}}>
        <img src={halfling} width='20%'/>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h5" >{props.name}</Typography>
          <Typography variant="h12">Lv.{props.level} {props.race} {props.class}</Typography>
          {props.charSheetUrl && <Link href={props.charSheetUrl} target="_blank" rel="noopener noreferrer">Character Sheet</Link>}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Button variant="contained" sx={{ backgroundColor: "light-blue", color: "white" }}><i class="fa-solid fa-pen-to-square"></i></Button>
        <Button onClick={deleteChar} variant="contained" color="error" type={'trash'}><i className="fa-solid fa-trash-can"></i></Button>
      </Box>
    </Card>
  )
}

export default PlayerCharacter;