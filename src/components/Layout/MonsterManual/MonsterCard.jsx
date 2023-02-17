import React from "react";
import styles from "../../CharacterCard/CharacterCard.module.css";
import Button from "../../UI/Button";

const MonsterCard = ({ monster, setGameCharacters }) => {
  const capitalize = (str) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return "";
  };

  let subtype = monster.subtype;

  if (subtype) {
    subtype = `(${capitalize(subtype)})`;
  }

  const rollTwentyLink = `https://roll20.net/compendium/dnd5e/${monster.name}`;

  const char = {
    id: Math.random(),
    ac: monster["armor_class"]["0"].value,
    charName: monster.name,
    charSheetUrl: rollTwentyLink,
    hp: monster.hit_points,
    initiative: 0,
    race: capitalize(monster.type),
    class: subtype,
    selected: false,
  };

  const addCharacter = () => {
    setGameCharacters((prev) => [...prev, char]);
  };

  return (
    <div className={styles.card}>
      <div className={styles.character}>
        <div className={styles.info}>
          <h1>{monster.name}</h1>
          <h3>
            Lv.{monster.level} {monster.race} {monster.class}
            {monster.size} {capitalize(monster.type)}
            {monster.subtype && ` (${capitalize(monster.subtype)})`},{" "}
            {monster.alignment}{" "}
          </h3>
          <div className={styles["stat-block"]}>
            <p>
              <span className={styles["stat-title"]}>Hit Points </span>
              {monster.hit_points}
            </p>
            <p>
              <span className={styles["stat-title"]}>Armor Class </span>
              {monster["armor_class"]["0"].value}
            </p>
          </div>
          <h3>
            <a href={rollTwentyLink} target="_blank" rel="noreferrer noopener">Roll20</a>
          </h3>
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
