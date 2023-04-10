import styles from "./CharacterBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCharacterInfo } from "../../../slices/gameRoomSlice";

const CharacterBar = ({ character, removeChar }) => {
  const [initiative, setInitiative] = useState(character.initiative);
  const [hp, setHp] = useState(character.hp);
  const [name, setName] = useState(character.name);
  const [ac, setAc] = useState(character.ac);

  const dispatch = useDispatch();
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
    const newInitiative = event.target.value;

    setInitiative(newInitiative);

    dispatch(
      updateCharacterInfo({
        id: character.id,
        info: "initiative",
        value: Number(newInitiative),
      })
    );
  };

  const changeHp = (event) => {
    setHp(event.target.value);
  };

  const changeName = (event) => {
    const newName = event.target.value;

    setName(newName);

    dispatch(
      updateCharacterInfo({
        id: character.id,
        info: "name",
        value: newName,
      })
    );
  };

  const changeAc = (event) => {
    const newAc = event.target.value;

    setAc(newAc);

    dispatch(
      updateCharacterInfo({
        id: character.id,
        info: "ac",
        value: Number(newAc),
      })
    );
  };

  return (
    <li
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        style={{ backgroundColor: selectedColor }}
        className={styles.selected}
      >
        {hp == 0 && <i className="fa-solid fa-skull"></i>}
      </div>
      <div className={styles.character}>
        <input
          className={styles['initiative-input']}
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
        <div className={styles.ac}>
          <input
            className={styles.input}
            value={ac}
            onChange={changeAc}
            type="number"
            step="1"
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <a
          className={styles["eye-icon"]}
          href={character.charSheet}
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
