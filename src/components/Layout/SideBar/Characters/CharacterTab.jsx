import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../slices/userSlice";
// import { selectCharacters, setCharacters } from "../../../slices/charactersSlice";
// import PlayerCharacter from "../../PlayerCharacter";
import Button from "../../../UI/Button";
import CharacterForm from "./CharacterForm";
import CharacterCard from "./CharacterCard";
import styles from "./CharacterTab.module.css";

const CharacterTab = ({
  gameCharacters,
  setGameCharacters,
  playerCharacters,
  setPlayerCharacters,
}) => {
  const [showForm, setShowForm] = useState(false);
  const user = useSelector(selectUser);

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  const charArray = playerCharacters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        id={character.id}
        userName={user.username}
        userId={character.user_id}
        img={character.img}
        charName={character.charname}
        level={character.level}
        race={character.race}
        class={character.class}
        charSheetUrl={character.charsheet}
        hp={character.hp}
        ac={character.ac}
        initiative={character.initiative}
        setGameCharacters={setGameCharacters}
        setPlayerCharacters={setPlayerCharacters}
      />
    );
  });

  return (
    <div>
      <div className={styles['control-buttons']}>
        <Button onClick={showFormHandler}>Create character</Button>
        <Button>Sort</Button>

      </div>
      {showForm && (
        <CharacterForm
          closeForm={showFormHandler}
          playerCharacters={playerCharacters}
          setPlayerCharacters={setPlayerCharacters}
        />
      )}
      <ul className={styles["character-list"]}>{charArray}</ul>
    </div>
  );
};

export default CharacterTab;
