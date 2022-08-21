import React from "react";
import Stat from "./Stat";
import './CharInfo.scss';

const CharInfo = props => {
  return (
    <div className="char-info">
      <h1>Character Name</h1>
      <div className="Stats">
        <Stat type='Initiative'/>
        <Stat type='HP'/>
        <Stat type='AC'/>
      </div>
    </div>
  )
}

export default CharInfo;