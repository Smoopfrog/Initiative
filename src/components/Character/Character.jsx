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
      <Button onClick={(event) => props.statChange(event, 'hp', 0)} type={'death'} id={props.id}/>
      <Button onClick={props.removeChar} id={props.id} type={'trash'} name={<i className="fa-solid fa-trash-can"></i>}/>
    </article>
  )
}

export default Character;