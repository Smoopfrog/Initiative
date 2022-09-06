import React from "react";
import Button from "./Character/Button";


const Tracker = props => {

  const playerTurn = props => {
    const selectedIndex = props.charArray.findIndex(char => char.selected)
    if (selectedIndex !== -1){
      return <h1>Turn: {props.charArray[selectedIndex].name}</h1>
    }
    return <h1>Prepare for battle!</h1>
  }
  return (
    <div>
      {playerTurn(props)}
      <Button onClick={props.prevChar} name={"<"} />
      <Button onClick={props.nextChar} name={">"} />
      <Button onClick={props.addChar} name={"+"} />
    </div>
  )
}

export default Tracker;