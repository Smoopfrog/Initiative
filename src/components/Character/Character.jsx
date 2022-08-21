import React from "react";
import Stat from "./Stat";
import './Character.scss';

const Character = props => {
  return (
    <article className="Character">
      <h1>Character Name</h1>
      <div className="Stats">
        <Stat type='Initiative'/>
        <Stat type='HP'/>
        <Stat type='AC'/>
      </div>
      <div>
        <h2>Conditions</h2>
        <ul>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
        </ul>
      </div>
      <button>DEATH</button>
      <button>Trash</button>

    </article>
  )
}

export default Character;