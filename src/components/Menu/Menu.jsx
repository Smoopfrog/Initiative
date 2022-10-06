import React from "react";
import { Box, Tabs, Tab } from '@mui/material';
import ServerTab from "./ServerTab";
import CharacterTab from "./CharacterTab";
import ProfileTab from "./ProfileTab";

const Menu = ({ setHomepage }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{
      width: { xs: '100vw', md: '40vw' },
      margin: '20px'
    }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Game" value="0" />
          <Tab label="Characters" value="1" />
          <Tab label="Profile" value="2" />
        </Tabs>
      </Box>
      {value === "0" && <ServerTab />}
      {value === "1" && <CharacterTab />}
      {value === "2" && <ProfileTab setHomepage={setHomepage} />}
    </Box>
  )
};

export default Menu;