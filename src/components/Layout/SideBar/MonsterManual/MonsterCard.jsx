import React from "react";
import styles from "../Characters/CharacterCard.module.css";
import Button from "../../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGameRoomCharacters,
  setGameRoomCharacters,
} from "../../../../slices/gameRoomSlice";
import { fraction } from "mathjs";
const MonsterCard = ({ monster }) => {
  const dispatch = useDispatch();
  const gameRoomCharacters = useSelector(selectGameRoomCharacters);

  let cr = monster["challenge_rating"];
  if (cr < 1) {
    const crValues = fraction(cr);
    cr = `${crValues.n}/${crValues.d}`;
  }

  const rollTwentyLink = `https://roll20.net/compendium/dnd5e/${monster.name}`;

  const character = {
    id: Date.now(),
    ac: monster["armor_class"]["0"].value,
    name: monster.name,
    charSheet: rollTwentyLink,
    hp: monster.hit_points,
    initiative: 0,
    race: monster.type,
    class: monster.subtype,
    selected: false,
  };

  const addCharacter = () => {
    dispatch(setGameRoomCharacters([...gameRoomCharacters, character]));
  };

  return (
    <div className={styles.card}>
      <div className={styles.character}>
        <div className={styles.info}>
          <a
            className={styles["char-name"]}
            href={rollTwentyLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            {monster.name}
          </a>
          <div className={styles["char-details"]}>
            <p className={styles["char-info"]}>
              CR {cr} {monster.race} {monster.class}
              {monster.size} {monster.type}
              {monster.subtype && ` (${monster.subtype})`}
            </p>
            <p className={styles["char-info"]}>{monster.alignment}</p>
            <p>
              <span className={styles["stat-title"]}>Hit Points </span>
              {monster.hit_points}
            </p>
            <p>
              <span className={styles["stat-title"]}>Armor Class </span>
              {monster["armor_class"]["0"].value}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button style="green" onClick={addCharacter}>
          <i className="fa-solid fa-plus"></i>
        </Button>
      </div>
    </div>
  );
};

export default MonsterCard;
