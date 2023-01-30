import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import axios from "axios";
import { Button, Card } from "@mui/material";
import ModalBackdrop from "./ModalBackdrop.jsx";
import UploadAndDisplayImage from "./UI/UploadAndDisplayImage";
import backdropStyles from "./Backdrop.module.css";
import styles from "./Form.module.css"

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
    <Card className={backdropStyles.modal}>
      <form className={styles.form}>
        <h1 className={styles.title}>Create a new character</h1>
        <UploadAndDisplayImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <div>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            id="name"
            type="text"
            value={newCharName}
            onChange={(e) => setNewCharName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="level" className={styles.label}>Level</label>
          <input
            id="level"
            type="number"
            value={newCharLevel}
            onChange={(e) => setNewCharLevel(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="race" className={styles.label}>Race</label>
          <input
            id="race"
            type="text"
            value={newCharRace}
            onChange={(e) => setNewCharRace(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="class" className={styles.label}>Class</label>
          <input
            id="class"
            type="text"
            value={newCharClass}
            onChange={(e) => setNewCharClass(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="hp" className={styles.label}>HP</label>
          <input
            id="hp"
            type="number"
            value={newCharHp}
            onChange={(e) => setNewCharHp(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ac" className={styles.label}>AC</label>
          <input
            id="ac"
            type="number"
            value={newCharAc}
            onChange={(e) => setNewCharAc(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="characterSheet" className={styles.label}>Character Sheet Link</label>
          <input
            id="characterSheet"
            type="url"
            value={newCharSheet}
            onChange={(e) => setNewCharSheet(e.target.value)}
          />
        </div>
        <footer className={styles.buttonGroup}>
          <Button onClick={submitNewChar} variant="contained" color="success">Create</Button>
          <Button onClick={props.closeForm} variant="contained" color="error">Cancel</Button>
        </footer>
      </form>
    </Card>
  );
};

const FormModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop onConfirm={props.onConfirm} closeForm={props.closeForm} />,
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
