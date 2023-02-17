import styles from "./GameRoom.module.css";
import Controller from "./Controller";
import CharacterBar from "./CharacterBar";

const GameRoom = ({ gameCharacters, setGameCharacters }) => {
  const sortByInitiative = (characters) => {
    let sortedCharacters = characters.sort(
      (a, b) => b.initiative - a.initiative
    );
    setGameCharacters([...sortedCharacters]);
  };

  const removeChar = (id) => {
    let newChars = gameCharacters.filter(
      (newCharacters) => newCharacters.id != id
    );
    setGameCharacters(newChars);
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

  const inGameChars = gameCharacters.map((character) => {
    return (
      <CharacterBar
        key={character.id}
        character={character}
        removeChar={removeChar}
      />
    );
  });

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
      return <h1>Active Combatant: {gameCharacters[selectedIndex].charName}</h1>;
    }
    return <h1>Prepare for battle!</h1>;
  };

  return (
    <div className={styles.page}>
      <Controller
        playerTurn={playerTurn}
        prevChar={prevChar}
        sortButtonHandler={sortButtonHandler}
        nextChar={nextChar}
      />
      <ul>
        <li className={styles["li-titles"]}>
          <i className="fa-solid fa-play"></i>
          <span>Name</span>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-shield-halved"></i>
          <span></span>
        </li>
        {inGameChars}
      </ul>
    </div>
  );
};

export default GameRoom;
