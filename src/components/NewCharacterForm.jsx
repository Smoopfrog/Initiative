import { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import axios from "axios";
import UploadAndDisplayImage from "./UploadAndDisplayImage";

const NewCharacterForm = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openNewChar, setOpenNewChar] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newCharName, setNewCharName] = useState("");
  const [newCharLevel, setNewCharLevel] = useState("");
  const [newCharRace, setNewCharRace] = useState("");
  const [newCharClass, setNewCharClass] = useState("");
  const [newCharHp, setNewCharHp] = useState("");
  const [newCharAc, setNewCharAc] = useState("");
  const [newCharSheet, setNewCharSheet] = useState("");
  const user = useSelector(selectUser);


  const submitNewChar = async () => {
    const newChar = {
      newCharName,
      newCharLevel,
      newCharRace,
      newCharClass,
      newCharHp,
      newCharAc,
      newCharSheet,
      userId: props.user.id,
      // image: selectedImage.name
    };

    let charId;
    await axios
      .post("/characters", newChar)
      .then((res) => {
        console.log(res.data);
        charId = res.data.id;
        props.setPlayerCharacters(res.data);
        // handleCharDialog();
      })
      .catch((error) => {
        console.log(error);
      });

    // const fd = new FormData();
    // fd.append("CharacterImage", selectedImage, selectedImage.name);

    // await axios
    //   .post("/characterImages", fd)
    //   .then((res) => {
    //     // setPlayerCharacters(res.data);
    //     // handleCharDialog();
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <form open={openNewChar} >
      <header>Create a new character</header>
      <body>
        <UploadAndDisplayImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <input
          label="Name"
          type="text"
          value={newCharName}
          onChange={(e) => setNewCharName(e.target.value)}
        />
        <input
          label="Level"
          type="number"
          value={newCharLevel}
          onChange={(e) => setNewCharLevel(e.target.value)}
        />
        <input
          label="Race"
          type="text"
          value={newCharRace}
          onChange={(e) => setNewCharRace(e.target.value)}
        />
        <input
          label="Class"
          type="text"
          value={newCharClass}
          onChange={(e) => setNewCharClass(e.target.value)}
        />

        <input
          label="HP"
          type="number"
          value={newCharHp}
          onChange={(e) => setNewCharHp(e.target.value)}
        />
        <input
          label="AC"
          type="number"
          value={newCharAc}
          onChange={(e) => setNewCharAc(e.target.value)}
        />
        <input
          label="Character Sheet Link"
          type="url"
          value={newCharSheet}
          onChange={(e) => setNewCharSheet(e.target.value)}
        />
      </body>
      <footer>
        <Button onClick={submitNewChar}>Create</Button>
        <Button >Cancel</Button>
      </footer>
    </form>
  );
};

export default NewCharacterForm;
