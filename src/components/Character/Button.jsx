import React from "react";

const Button = props => {
  return (
    <button data-tag={props.id} onClick={event => props.onClick(event)}>{props.name}</button>
  )
}

export default Button;