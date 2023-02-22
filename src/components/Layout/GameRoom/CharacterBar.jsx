import styles from "./CharacterBar.module.css";
import Button from "../../UI/Button";

import { useState } from "react";

const CharacterBar = ({ character, removeChar }) => {
  console.log(character);
  const [initiative, setInitiative] = useState("1");
  const [hp, setHp] = useState(character.hp);

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
      {character.selected ? (
        <div className={styles.selected}>!</div>
      ) : (
        <div className={styles.selected}></div>
      )}
      <div className={styles.character}>
        <input
          className={styles.input}
          value={initiative}
          onChange={changeInitiative}
          type="number"
          step="1"
        ></input>
        <div className={styles.name}>{character.charName}</div>
      </div>

      <div className={styles.stats}>
        <div className={styles.hp}>
          <input
            className={styles.input}
            style={{ color: hpColor }}
            value={hp}
            onChange={changeHp}
            type="number"
            step="1"
          />
          <div style={{ color: hpColor }}>/{character.hp}</div>
        </div>
        <div className={styles.ac}>{character.ac}</div>
      </div>
      <div className={styles.buttons}>
        <a
          href={character.charSheetUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          <i class="fa-solid fa-question"></i>
        </a>
        <div className={styles["delete-icon"]}>
          <i
            className="fa-solid fa-x delete"
            onClick={() => removeChar(character.id)}
          ></i>
        </div>
      </div>
    </li>
  );
};

export default CharacterBar;
