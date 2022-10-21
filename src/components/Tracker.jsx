import React from "react";
// import Button from "./Character/Button";
import { Button } from "@mui/material";


const Tracker = props => {

  const playerTurn = props => {
    const selectedIndex = props.gameCharacters.findIndex(char => char.selected)
    if (selectedIndex !== -1){
      return <h1>Turn: {props.charArray[selectedIndex].name}</h1>
    }
    return <h1>Prepare for battle!</h1>
  }

  return (
    <div className="tracker">
      {playerTurn(props)}
      <Button ><i class="fa-solid fa-arrow-left"></i></Button>
      <Button ><i class="fa-solid fa-arrow-right"></i></Button>
    </div>
  )
}

export default Tracker;