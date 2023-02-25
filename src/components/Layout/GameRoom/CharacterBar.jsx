import styles from "./CharacterBar.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGameRoomCharacters, setGameRoomCharacters } from "../../../slices/gameRoomSlice";

const CharacterBar = ({ character, removeChar }) => {
  const [initiative, setInitiative] = useState(character.initiative);
  const [hp, setHp] = useState(character.hp);
  const [name, setName] = useState(character.name);
  const dispatch = useDispatch();
  const gameRoomCharacters = useSelector(selectGameRoomCharacters);

  let backgroundColor = "";
  let selectedColor = "";

  if (character.selected) {
    backgroundColor = "darkgrey";
    selectedColor = "red";
  }

  let hpColor = "green";

  if (hp < character.hp / 2) {
    hpColor = "red";
  }

  const changeInitiative = (event) => {
    setInitiative(event.target.value);
    
    const characters = [...gameRoomCharacters]
    const characterIndex = characters.findIndex((char => char.id === character.id));
    characters[characterIndex].initiative = event.target.value
    console.log(characters)
    dispatch(setGameRoomCharacters(characters))
  };

  const changeHp = (event) => {
    setHp(event.target.value);
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  return (
    <li
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        style={{ backgroundColor: selectedColor }}
        className={styles.selected}
      ></div>
      <div className={styles.character}>
        <input
          className={styles.input}
          value={initiative}
          onChange={changeInitiative}
          type="number"
          step="1"
        ></input>
        <div className={styles.name}>
          <input
            className={styles["name-input"]}
            value={name}
            onChange={changeName}
            type="text"
          ></input>
        </div>
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
          <i className="fa-solid fa-eye"></i>{" "}
        </a>
        <div className={styles["delete-icon"]}>
          <i
            className="fa-solid fa-trash"
            onClick={() => removeChar(character.id)}
          ></i>
        </div>
      </div>
    </li>
  );
};

export default CharacterBar;
