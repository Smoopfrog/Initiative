import React from "react";
import Button from "./Character/Button";


const Tracker = props => {
  return (
    <div>
      <h2>Turn: {props.charName}</h2>
      <Button name={"<"} />
      <Button name={">"} />
      <Button onClick={props.addChar} name={"+"} />
    </div>
  )
}

export default Tracker;