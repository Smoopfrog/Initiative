import React from "react";
import Stat from "./Stat";
import './CharInfo.scss';

const CharInfo = props => {
  return (
    <div className="char-info">
      <h1>{props.name}</h1>
      <div className="Stats">
        <Stat type='Initiative' id={props.id} value={props.initiative} onChange={props.onChange}/>
        <Stat type='HP' id={props.id} value={props.hp} onChange={props.onChange}/>
        <Stat type='AC' id={props.id} value={props.ac} onChange={props.onChange}/>
      </div>
    </div>
  )
}

export default CharInfo;