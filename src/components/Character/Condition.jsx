import React from "react";
import classNames from "classnames";
import './Condition.scss'

const Condition = props => {
  const conditionClass = classNames('Condition', {'Condition': props.name});

  return (
    <button className={conditionClass}>{props.icon}</button>
  )
}

export default Condition;