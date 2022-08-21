import React from "react";
import CharInfo from "./CharInfo";
import Condition from "./Condition";
import './Character.scss';

const Character = props => {
  return (
    <article className="Character">
      <CharInfo />
      <div className="Conditions">
        <h2>Conditions</h2>
        <Condition />
        <Condition />
        <Condition />
        <Condition />
        <Condition />
        <Condition />
        <Condition />
      </div>
      <button>DEATH</button>
      <button>Trash</button>

    </article>
  )
}

export default Character;