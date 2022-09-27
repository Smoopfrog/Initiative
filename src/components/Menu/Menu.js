import React from "react";
import { useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { Box, Tabs, Tab } from '@mui/material';
import ServerTab from "./ServerTab";
import CharacterTab from "./CharacterTab";
import ProfileTab from "./ProfileTab";

const Menu = () => {
  const user = useSelector(selectUser);
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Game" value="0" />
          <Tab label="Characters" value="1" />
          <Tab label="Profile" value="2" />

        </Tabs>
      </Box>
      {value === "0" && <ServerTab />}
      {value === "1" && <CharacterTab />}
      {value === "2" && <ProfileTab />}

    </Box>
  )
};

export default Menu;