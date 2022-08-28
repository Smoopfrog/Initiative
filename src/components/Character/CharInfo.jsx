import React from "react";
import Stat from "./Stat";
import './CharInfo.scss';

const CharInfo = props => {
  return (
    <div className="char-info">
      <h1>{props.name}</h1>
      <div className="Stats">
        <Stat type='Initiative' id={props.id} value={props.initiative} statChange={props.statChange}/>
        <Stat type='HP' id={props.id} value={props.hp} statChange={props.statChange}/>
        <Stat type='AC' id={props.id} value={props.ac} statChange={props.statChange}/>
      </div>
    </div>
  )
}

export default CharInfo;