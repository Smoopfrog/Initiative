import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import CharacterTab from "./CharacterTab.jsx";
import ProfileTab from "./ProfileTab.jsx";
import GameRoomTab from "./GameRoom";
import MonsterManualTab from "./MonsterManualTab.jsx";


const Menu = ({ setHomepage, playerCharacters, setPlayerCharacters }) => {
  const [value, setValue] = useState("1");
  const [gameCharacters, setGameCharacters] = useState([]);

  const sortByInitiative = (characters) => {
    let sortedCharacters = characters.sort(
      (a, b) => b.initiative - a.initiative
    );
    setGameCharacters([...sortedCharacters]);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: { xs: "100vw", md: "40vw" },
        margin: "20px",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Game" value="0" />
          <Tab label="Characters" value="1" />
          <Tab label="Monster Manual" value="2" />
          <Tab label="Profile" value="3" />
        </Tabs>
      </Box>
      {value === "0" && (
        <GameRoomTab
          gameCharacters={gameCharacters}
          setGameCharacters={setGameCharacters}
          sortByInitiative={sortByInitiative}
        />
      )}
      {value === "1" && (
        <CharacterTab
          playerCharacters={playerCharacters}
          setPlayerCharacters={setPlayerCharacters}
          gameCharacters={gameCharacters}
          setGameCharacters={setGameCharacters}
        />
      )}
      {value === "2" && <MonsterManualTab setGameCharacters={setGameCharacters}/>}
      {value === "3" && <ProfileTab setHomepage={setHomepage} />}
    </Box>
  );
};

export default Menu;
