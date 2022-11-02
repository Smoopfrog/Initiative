import React from "react";
// import Button from "./Character/Button";
import { Button } from "@mui/material";


const Tracker = ({ gameCharacters, setGameCharacters }) => {

  // const playerTurn = props => {
  //   const selectedIndex = gameCharacters.findIndex(char => char.selected)
  //   if (selectedIndex !== -1){
  //     return <h1>Turn: {props.charArray[selectedIndex].name}</h1>
  //   }
  //   return <h1>Prepare for battle!</h1>
  // }

  const sortByInitiative = characters => {
    console.log('sort')
    let sortedChars = characters.sort((a, b) => b.initiative - a.initiative);
    setGameCharacters(sortedChars);
  }

  return (
    <div className="tracker">
      {/* {playerTurn(props)} */}
      <Button ><i class="fa-solid fa-arrow-left"></i></Button>
      <Button onClick={() => sortByInitiative(gameCharacters)} >Sort</Button>
      <Button ><i class="fa-solid fa-arrow-right"></i></Button>
    </div>
  )
}

export default Tracker;