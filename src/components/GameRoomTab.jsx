import { Box, Button } from "@mui/material";
import InGameCharacter from "./InGameCharacter";

const GameRoom = ({ setGameCharacters, gameCharacters, sortByInitiative }) => {
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

  return (
    <Box>
      <div className="tracker">
        <Button>
          <i class="fa-solid fa-arrow-left"></i>
        </Button>
        <Button onClick={sortButtonHandler}>Sort</Button>
        <Button>
          <i class="fa-solid fa-arrow-right"></i>
        </Button>
      </div>
      {inGameChars}
    </Box>
  );
};

export default GameRoom;
