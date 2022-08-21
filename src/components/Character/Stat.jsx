import React from "react";
import "./Stat.scss"

const Stat = props => {

  return (
    <div className="Stat">
      <input type="number" /> <br />
      <label>{props.type}</label>
    </div>
  )
}

export default Stat;
