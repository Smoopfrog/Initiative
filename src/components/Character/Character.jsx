import React from "react";
import CharInfo from "./CharInfo";
import Conditions from "./Conditions";
import './Character.scss';
import Button from "./Button";

const Character = props => {
  return (
    <article className="Character">
      <CharInfo />
      <Conditions />
      <Button name={"Death"}/>
      <Button name={"Trash"}/>
    </article>
  )
}

export default Character;