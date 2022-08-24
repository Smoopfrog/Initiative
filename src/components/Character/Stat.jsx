import React from "react";
import "./Stat.scss"

const Stat = props => {

  return (
    <form className="Stat ">
      <input type="number" data-tag={props.id} className={props.type} value={props.value} onChange={e => props.onChange(e, props.type)}/>
      <label>{props.type}</label>
    </form>
  )
}

export default Stat;
