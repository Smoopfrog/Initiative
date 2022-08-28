import React from "react";
import "./Stat.scss"

const handleEnter = event => {
  event.preventDefault();
  event.target.blur();
}

const Stat = props => {

  return (
    <form className="Stat" onKeyPress={(e) => { e.key === 'Enter' && handleEnter(e)}}>
      <input type="number" data-tag={props.id} className={props.type} value={props.value} onChange={e => props.statChange(e, props.type)}/>
      <label>{props.type}</label>
    </form>
  )
}

export default Stat;
