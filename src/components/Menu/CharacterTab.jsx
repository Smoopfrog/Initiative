import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../slices/userSlice";
import { selectCharacters, setCharacters } from "../../slices/charactersSlice";
import PlayerCharacter from "../PlayerCharacter";
import { Box, Stack, Button } from "@mui/material";
import FormModal from "../FormModal";

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
      <PlayerCharacter
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
    <Box sx={{maxHeight: '88vh'}}>
      <Box>
        <Button variant="outlined" onClick={showFormHandler}>
          Create character
        </Button>
      </Box>
      {showForm && (
        <FormModal
          closeForm={showFormHandler}
          playerCharacters={playerCharacters}
          setPlayerCharacters={setPlayerCharacters}
        />
      )}
      <Box sx={{ overflowY: "scroll", maxHeight: "inherit" }}>{charArray}</Box>
    </Box>
  );
};

export default CharacterTab;
