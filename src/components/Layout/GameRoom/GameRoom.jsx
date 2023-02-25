import { useDispatch, useSelector } from "react-redux";
import {
  selectGameRoomCharacters,
  setGameRoomCharacters,
} from "../../../slices/gameRoomSlice";
import styles from "./GameRoom.module.css";
import Controller from "./Controller";
import CharacterBar from "./CharacterBar";

const GameRoom = () => {
  const dispatch = useDispatch();
  const gameCharacters = useSelector(selectGameRoomCharacters);
  console.log("gameCharacters", gameCharacters);

  const sortByInitiative = (characters) => {
    console.log("characters", characters);
    const copiedCharcters = [...gameCharacters]

    const sortedCharacters = copiedCharcters.sort(
      (a, b) => b.initiative - a.initiative
    );
    console.log("sortedCharacters", sortedCharacters);
    dispatch(setGameRoomCharacters(sortedCharacters));
  };

  const removeChar = (id) => {
    let newChars = gameCharacters.filter(
      (newCharacters) => newCharacters.id != id
    );
    dispatch(setGameRoomCharacters(newChars));
  };

  const sortButtonHandler = () => {
    sortByInitiative(gameCharacters);
  };

  const nextChar = () => {
    // get selected char and index
    let selectedIndex = gameCharacters.findIndex((char) => char.selected);
    let selectedChar = {};

    // check if any are selected
    if (selectedIndex !== -1) {
      selectedChar = {
        ...gameCharacters.find((char, index) => index === selectedIndex),
      };
      selectedChar.selected = false;
    } else {
      selectedIndex = -1;
    }
    // Check if at end of order
    if (selectedIndex == gameCharacters.length - 1) {
      selectedIndex = -1;
    }

    const nextUp = {
      ...gameCharacters.find((char, index) => index === selectedIndex + 1),
    };

    nextUp.selected = true;
    console.log("nextUp", nextUp.selected);

    // replace the char obj by finding the id
    const newState = gameCharacters.map((character) => {
      if (character.id == nextUp.id) return nextUp;
      if (character.id == selectedChar.id) return selectedChar;
      return character;
    });

    dispatch(setGameRoomCharacters(newState));
  };

  const prevChar = () => {
    // get selected char and index
    let selectedIndex = gameCharacters.findIndex((char) => char.selected);
    let selectedChar = {};

    // check if any are selected
    if (selectedIndex !== -1) {
      selectedChar = {
        ...gameCharacters.find((char, index) => index === selectedIndex),
      };
      selectedChar.selected = false;
    } else {
      selectedIndex = 1;
    }

    // Check if at top of order
    if (selectedIndex == 0) {
      selectedIndex = gameCharacters.length;
    }

    let nextUp = {
      ...gameCharacters.find((char, index) => index === selectedIndex - 1),
    };

    nextUp.selected = true;

    // replace the char obj by finding the id
    const newState = gameCharacters.map((character) => {
      if (character.id == nextUp.id) return nextUp;
      if (character.id == selectedChar.id) return selectedChar;
      return character;
    });
    dispatch(setGameRoomCharacters(newState));
  };

  const playerTurn = () => {
    const selectedIndex = gameCharacters.findIndex((char) => char.selected);
    if (selectedIndex !== -1) {
      return (
        <div className={styles.subtitle}>
          <h4>Active Combatant:</h4>
          <h1>{gameCharacters[selectedIndex].name}</h1>
        </div>
      );
    }
    return <h1>Prepare for battle!</h1>;
  };

  const inGameChars = gameCharacters.map((character) => {
    return (
      <CharacterBar
        key={character.id}
        character={character}
        removeChar={removeChar}
      />
    );
  });

  return (
    <div className={styles.page}>
      <Controller
        playerTurn={playerTurn}
        prevChar={prevChar}
        sortButtonHandler={sortButtonHandler}
        nextChar={nextChar}
      />
      <ul className={styles["initiative-tracker"]}>
        <li className={styles["li-titles"]}>
          <div className={styles["selected-space"]}></div>
          <div className={styles["intiative-name"]}>
            <div className={styles.initiative}>
              <i className="fa-solid fa-play"></i>
            </div>
            <div className={styles.name}>Name</div>
          </div>
          <div className={styles.stats}>
            <div className={styles.heart}>
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className={styles.shield}>
              <i className="fa-solid fa-shield-halved"></i>
            </div>
          </div>
          <div className={styles["buttons-space"]}></div>
        </li>
        {inGameChars}
      </ul>
    </div>
  );
};

export default GameRoom;
