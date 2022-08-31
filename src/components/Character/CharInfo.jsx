import React from "react";
import Stat from "./Stat";
import './CharInfo.scss';
const handleEnter = event => {
  event.preventDefault();
  event.target.blur();
}
const CharInfo = props => {
  return (
    <div className="char-info">
      <textarea 
        className="char-name" 
        onKeyPress={(e) => { e.key === 'Enter' && handleEnter(e)}} 
        value={props.name} onChange={e => props.statChange(e, 'name')} 
        data-tag={props.id}>
      </textarea>
      <div className="Stats">
        <Stat type='Initiative' id={props.id} value={props.initiative} statChange={props.statChange}/>
        <Stat type='HP' id={props.id} value={props.hp} statChange={props.statChange}/>
        <Stat type='AC' id={props.id} value={props.ac} statChange={props.statChange}/>
      </div>
    </div>
  )
}

export default CharInfo;