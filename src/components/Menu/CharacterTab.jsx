import React, { useState } from "react";
import PlayerCharacter from "../PlayerCharacter";
import useApplicationData from "../../hooks/useApplicationData";
import { Box, Stack, Button, Menu, MenuItem, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField, Input } from "@mui/material";

const CharacterTab = () => {
  const { state } = useApplicationData()
  const [anchorEl, setAnchorEl] = useState(null);
  const [openNewChar, setOpenNewChar] = useState(false)
  // const [sortOrder, setSortOrder] = useState('level');

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddNewChar = () => {
    setOpenNewChar(!openNewChar)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const charArray = state.map(character => {
    return (
      <PlayerCharacter
        key={character.id}
        id={character.id}
        img={character.img}
        name={character.name}
        level={character.level}
        race={character.race}
        class={character.class}
        charSheetUrl={character.charSheetUrl}
        hp={character.hp}
        ac={character.ac}
        initiative={character.initiative}
      />
    )
  })

  return (
    <Box>
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Sort by
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Name</MenuItem>
          <MenuItem onClick={handleClose}>Level</MenuItem>
          <MenuItem onClick={handleClose}>Class</MenuItem>
          <MenuItem onClick={handleClose}>Race</MenuItem>

        </Menu>
      </Box>
      <Button variant="outlined" onClick={handleAddNewChar}>
        Open form dialog
      </Button>
      <Dialog open={openNewChar} onClose={handleAddNewChar}>
        <DialogTitle>Create a new character</DialogTitle>
        <DialogContent sx={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Level"
            type="number"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Race"
            type="text"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Class"
            type="text"
            variant="standard"
          />
         
          <TextField
            margin="dense"
            id="name"
            label="HP"
            type="number"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="AC"
            type="number"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Character Sheet Link"
            type="url"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Create</Button>
          <Button onClick={handleAddNewChar}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Stack>
        {charArray}
      </Stack>
    </Box>
  )
}

export default CharacterTab;