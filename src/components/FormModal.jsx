import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import axios from "axios";
import { Button, Card } from "@mui/material";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.closeForm} />;
};

const NewCharacterForm = (props) => {
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
      userId: user.id,
    };

    await axios
      .post("/characters", newChar)
      .then((res) => {
        props.setPlayerCharacters(res.data);
        props.closeForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card className={styles.modal}>
      <form>
        <header>Create a new character</header>
        <UploadAndDisplayImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={newCharName}
            onChange={(e) => setNewCharName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="level">Level</label>
          <input
            id="level"
            type="number"
            value={newCharLevel}
            onChange={(e) => setNewCharLevel(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="race">Race</label>
          <input
            id="race"
            type="text"
            value={newCharRace}
            onChange={(e) => setNewCharRace(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="class">Class</label>
          <input
            id="class"
            type="text"
            value={newCharClass}
            onChange={(e) => setNewCharClass(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="hp">HP</label>
          <input
            id="hp"
            type="number"
            value={newCharHp}
            onChange={(e) => setNewCharHp(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ac">AC</label>
          <input
            id="ac"
            type="number"
            value={newCharAc}
            onChange={(e) => setNewCharAc(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="characterSheet">Character Sheet Link</label>
          <input
            id="characterSheet"
            type="url"
            value={newCharSheet}
            onChange={(e) => setNewCharSheet(e.target.value)}
          />
        </div>
        <footer>
          <Button onClick={submitNewChar}>Create</Button>
          <Button onClick={props.closeForm}>Cancel</Button>
        </footer>
      </form>
    </Card>
  );
};

const FormModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} closeForm={props.closeForm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <NewCharacterForm
          closeForm={props.closeForm}
          playerCharacters={props.playerCharacters}
          setPlayerCharacters={props.setPlayerCharacters}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default FormModal;
