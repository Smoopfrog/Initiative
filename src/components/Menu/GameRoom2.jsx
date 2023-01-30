// import { Box, Button } from "@mui/material";
// import InGameCharacter from "../InGameCharacter";

// const GameRoom = ({ setGameCharacters, gameCharacters, sortByInitiative }) => {
//   const inGameChars = gameCharacters.map((character) => {
//     return (
//       <InGameCharacter
//         key={character.id}
//         character={character}
//         gameCharacters={gameCharacters}
//         setGameCharacters={setGameCharacters}
//       />
//     );
//   });

//   const sortButtonHandler = () => {
//     sortByInitiative(gameCharacters);
//   };

//   const nextChar = () => {
//     // get selected char and index
//     let selectedIndex = gameCharacters.findIndex((char) => char.selected);
//     let selectedChar = {};

//     // check if any are selected
//     if (selectedIndex !== -1) {
//       selectedChar = gameCharacters.find(
//         (char, index) => index === selectedIndex
//       );
//       selectedChar.selected = false;
//     } else {
//       selectedIndex = -1;
//     }

//     // Check if at end of order
//     if (selectedIndex == gameCharacters.length - 1) {
//       selectedIndex = -1;
//     }

//     let nextUp = gameCharacters.find(
//       (char, index) => index === selectedIndex + 1
//     );

//     nextUp.selected = true;

//     // replace the char obj by finding the id
//     const newState = gameCharacters.map((character) => {
//       if (character.id == nextUp.id) return nextUp;
//       if (character.id == selectedChar.id) return selectedChar;
//       return character;
//     });

//     setGameCharacters(newState);
//   };

//   const prevChar = () => {
//     // get selected char and index
//     let selectedIndex = gameCharacters.findIndex((char) => char.selected);
//     let selectedChar = {};

//     // check if any are selected
//     if (selectedIndex !== -1) {
//       selectedChar = gameCharacters.find(
//         (char, index) => index === selectedIndex
//       );
//       selectedChar.selected = false;
//     } else {
//       selectedIndex = 1;
//     }

//     // Check if at top of order
//     if (selectedIndex == 0) {
//       selectedIndex = gameCharacters.length;
//     }

//     let nextUp = gameCharacters.find(
//       (char, index) => index === selectedIndex - 1
//     );

//     nextUp.selected = true;

//     // replace the char obj by finding the id
//     const newState = gameCharacters.map((character) => {
//       if (character.id == nextUp.id) return nextUp;
//       if (character.id == selectedChar.id) return selectedChar;
//       return character;
//     });

//     setGameCharacters(newState);
//   };

//   const playerTurn = () => {
//     const selectedIndex = gameCharacters.findIndex((char) => char.selected);
//     if (selectedIndex !== -1) {
//       return <h1>Turn: {gameCharacters[selectedIndex].charName}</h1>;
//     }
//     return <h1>Prepare for battle!</h1>;
//   };

//   return (
//     <Box>
//       {gameCharacters.length === 0 ? <h1>Add peoples please</h1> : 
//       (<Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
//         {playerTurn()}
//         <Box>
//           <Button onClick={prevChar}>
//             <i className="fa-solid fa-arrow-left"></i>
//           </Button>
//           <Button onClick={sortButtonHandler}>Sort</Button>
//           <Button onClick={nextChar}>
//             <i className="fa-solid fa-arrow-right"></i>
//           </Button>
//         </Box>
        
//       </Box>)
//     }
//     {inGameChars}
//     </Box>
//   );
// };

// export default GameRoom;
