import React from "react";
import CharInfo from "./CharInfo";
import Conditions from "./Conditions";
import './Character.scss';
import Button from "./Button";

const Character = props => {
  return (
    <article className="Character">
      <CharInfo 
        id={props.id}
        name={props.name}
        hp={props.hp}
        ac={props.ac}
        initiative={props.initiative}
        statChange={props.statChange}
        
      />
      <Conditions />
      <Button onClick={(event) => props.statChange(event, 'hp', 0)} id={props.id} name={"Death"}/>
      <Button onClick={props.removeChar} id={props.id} name={"Trash"}/>
    </article>
  )
}

export default Character;