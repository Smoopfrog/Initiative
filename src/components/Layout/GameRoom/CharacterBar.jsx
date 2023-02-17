import styles from "./CharacterBar.module.css";
import Button from "../../UI/Button";

import { useState } from "react";

const CharacterBar = ({ character, removeChar }) => {
  const [initiative, setInitiative] = useState("1");
  const [hp, setHp] = useState(character.hp);
  // if (character.selected) {
  //   backgroundColor = "yellow";
  // }

  let backgroundColor = "";

  if (character.selected) {
    backgroundColor = "grey";
  }

  let hpColor = "green";

  if (hp < character.hp / 2) {
    hpColor = "red";
  }

  const changeInitiative = (event) => {
    setInitiative(event.target.value);
    character.initiative = event.target.value;
  };

  const changeHp = (event) => {
    setHp(event.target.value);
  };

  return (
    <li
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <input
        className={styles.input}
        value={initiative}
        onChange={changeInitiative}
        type="number"
        step="1"
      ></input>
      <span>{character.charName}</span>

      <span className={styles.hp}>
        <input
          className={styles.input}
          style={{ color: hpColor }}
          value={hp}
          onChange={changeHp}
          type="number"
          step="1"
        />
        <span style={{ color: hpColor }}>/{character.hp}</span>
      </span>
      <span>{character.ac}</span>
      <i
        class="fa-solid fa-x delete"
        onClick={() => removeChar(character.id)}
      ></i>
    </li>
  );
};

export default CharacterBar;
