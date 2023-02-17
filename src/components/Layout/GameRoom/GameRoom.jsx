import styles from "./GameRoom.module.css";
import InGameCharacter from "../../InGameCharacter";
import Controller from "./Controller";
import CharacterBar from "./CharacterBar";

const GameRoom = ({ gameCharacters, setGameCharacters }) => {
  const sortByInitiative = (characters) => {
    let sortedCharacters = characters.sort(
      (a, b) => b.initiative - a.initiative
    );
    setGameCharacters([...sortedCharacters]);
  };

  const inGameChars = gameCharacters.map((character) => {
    return (
      <InGameCharacter
        key={character.id}
        character={character}
        gameCharacters={gameCharacters}
        setGameCharacters={setGameCharacters}
      />
    );
  });

  const sortButtonHandler = () => {
    sortByInitiative(gameCharacters);
  };

  const nextChar = () => {
    // get selected char and index
    let selectedIndex = gameCharacters.findIndex((char) => char.selected);
    let selectedChar = {};

    // check if any are selected
    if (selectedIndex !== -1) {
      selectedChar = gameCharacters.find(
        (char, index) => index === selectedIndex
      );
      selectedChar.selected = false;
    } else {
      selectedIndex = -1;
    }

    // Check if at end of order
    if (selectedIndex == gameCharacters.length - 1) {
      selectedIndex = -1;
    }

    let nextUp = gameCharacters.find(
      (char, index) => index === selectedIndex + 1
    );

    nextUp.selected = true;

    // replace the char obj by finding the id
    const newState = gameCharacters.map((character) => {
      if (character.id == nextUp.id) return nextUp;
      if (character.id == selectedChar.id) return selectedChar;
      return character;
    });

    setGameCharacters(newState);
  };

  const prevChar = () => {
    // get selected char and index
    let selectedIndex = gameCharacters.findIndex((char) => char.selected);
    let selectedChar = {};

    // check if any are selected
    if (selectedIndex !== -1) {
      selectedChar = gameCharacters.find(
        (char, index) => index === selectedIndex
      );
      selectedChar.selected = false;
    } else {
      selectedIndex = 1;
    }

    // Check if at top of order
    if (selectedIndex == 0) {
      selectedIndex = gameCharacters.length;
    }

    let nextUp = gameCharacters.find(
      (char, index) => index === selectedIndex - 1
    );

    nextUp.selected = true;

    // replace the char obj by finding the id
    const newState = gameCharacters.map((character) => {
      if (character.id == nextUp.id) return nextUp;
      if (character.id == selectedChar.id) return selectedChar;
      return character;
    });

    setGameCharacters(newState);
  };

  const playerTurn = () => {
    const selectedIndex = gameCharacters.findIndex((char) => char.selected);
    if (selectedIndex !== -1) {
      return <h1>Turn: {gameCharacters[selectedIndex].charName}</h1>;
    }
    return <h1>Prepare for battle!</h1>;
  };

  return (
    <div className={styles.page}>
      {gameCharacters.length === 0 ? (
        <h1>Add peoples please</h1>
      ) : (
        <Controller
          playerTurn={playerTurn}
          prevChar={prevChar}
          sortButtonHandler={sortButtonHandler}
          nextChar={nextChar}
        />
      )}
      <ul>
        <li className={styles['li-titles']}>
          <i class="fa-solid fa-play"></i>
          <span>Name</span>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-shield-halved"></i>
        </li>
      </ul>
      {/* <CharacterBar /> */}
      {/* {inGameChars} */}
    </div>
  );
};

export default GameRoom;
