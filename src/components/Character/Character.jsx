import React from "react";
import CharInfo from "./CharInfo";
import Conditions from "./Conditions";
import './Character.scss';

const Character = props => {
  return (
    <article className="Character">
      <CharInfo />
      <Conditions />
      <button>DEATH</button>
      <button>Trash</button>

    </article>
  )
}

export default Character;