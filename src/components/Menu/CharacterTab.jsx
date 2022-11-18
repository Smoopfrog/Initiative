import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../slices/userSlice";
import { selectCharacters, setCharacters } from "../../slices/charactersSlice";
import PlayerCharacter from "../PlayerCharacter";
import {
  Box,
  Stack,
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Input,
} from "@mui/material";
import UploadAndDisplayImage from "../UploadAndDisplayImage";
import FormModal from "../FormModal";

const CharacterTab = ({
  gameCharacters,
  setGameCharacters,
  playerCharacters,
  setPlayerCharacters,
}) => {
  const [showForm, setShowForm] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const [openNewChar, setOpenNewChar] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [newCharName, setNewCharName] = useState("");
  // const [newCharLevel, setNewCharLevel] = useState("");
  // const [newCharRace, setNewCharRace] = useState("");
  // const [newCharClass, setNewCharClass] = useState("");
  // const [newCharHp, setNewCharHp] = useState("");
  // const [newCharAc, setNewCharAc] = useState("");
  // const [newCharSheet, setNewCharSheet] = useState("");
  const user = useSelector(selectUser);
  // const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const submitNewChar = async () => {
  //   const newChar = {
  //     newCharName,
  //     newCharLevel,
  //     newCharRace,
  //     newCharClass,
  //     newCharHp,
  //     newCharAc,
  //     newCharSheet,
  //     userId: user.id,
  //     // image: selectedImage.name
  //   };

  //   let charId;
  //   await axios
  //     .post("/characters", newChar)
  //     .then((res) => {
  //       console.log(res.data);
  //       charId = res.data.id;
  //       setPlayerCharacters(res.data);
  //       handleCharDialog();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // const fd = new FormData();
  //   // fd.append("CharacterImage", selectedImage, selectedImage.name);

  //   // await axios
  //   //   .post("/characterImages", fd)
  //   //   .then((res) => {
  //   //     // setPlayerCharacters(res.data);
  //   //     // handleCharDialog();
  //   //     console.log(res.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  // };

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
    <Box>
      <Box>
        {/* <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
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
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Name</MenuItem>
          <MenuItem onClick={handleClose}>Level</MenuItem>
          <MenuItem onClick={handleClose}>Class</MenuItem>
          <MenuItem onClick={handleClose}>Race</MenuItem>
        </Menu> */}
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
      {/* <Dialog open={openNewChar} onClose={handleCharDialog}>
        <DialogTitle>Create a new character</DialogTitle>
        <DialogContent
          type="form"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <UploadAndDisplayImage
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            variant="standard"
            value={newCharName}
            onChange={(e) => setNewCharName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Level"
            type="number"
            variant="standard"
            value={newCharLevel}
            onChange={(e) => setNewCharLevel(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Race"
            type="text"
            variant="standard"
            value={newCharRace}
            onChange={(e) => setNewCharRace(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Class"
            type="text"
            variant="standard"
            value={newCharClass}
            onChange={(e) => setNewCharClass(e.target.value)}
          />

          <TextField
            margin="dense"
            id="name"
            label="HP"
            type="number"
            variant="standard"
            value={newCharHp}
            onChange={(e) => setNewCharHp(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="AC"
            type="number"
            variant="standard"
            value={newCharAc}
            onChange={(e) => setNewCharAc(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Character Sheet Link"
            type="url"
            fullWidth
            variant="standard"
            value={newCharSheet}
            onChange={(e) => setNewCharSheet(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={submitNewChar}>Create</Button>
          <Button onClick={handleCharDialog}>Cancel</Button>
        </DialogActions>
      </Dialog> */}
      <Stack>{charArray}</Stack>
    </Box>
  );
};

export default CharacterTab;
