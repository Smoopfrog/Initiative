import React from "react";
import "./Button.scss"

const Button = props => {
  return (
    <button data-tag={props.id} className={props.type} onClick={event => props.onClick(event)}>{props.name}</button>
  )
}

export default Button;