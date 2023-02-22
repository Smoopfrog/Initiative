import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../slices/userSlice";
import axios from "axios";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import ModalBackdrop from "../../../UI/ModalBackdrop.jsx";
import styles from "./CharacterForm.module.css";

const NewCharacterForm = (props) => {
  const [newCharName, setNewCharName] = useState("");
  const [newCharLevel, setNewCharLevel] = useState("");
  const [newCharRace, setNewCharRace] = useState("");
  const [newCharClass, setNewCharClass] = useState("");
  const [newCharHp, setNewCharHp] = useState("");
  const [newCharAc, setNewCharAc] = useState("");
  const [newCharSheet, setNewCharSheet] = useState("");
  const [formError, setFormError] = useState();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!formError) {
      return;
    }

    setFormError(true);

    const errorTimer = setTimeout(() => {
      setFormError(false);
    }, 3000);

    return () => clearTimeout(errorTimer);
  }, [formError]);

  const submitNewChar = async (event) => {
    event.preventDefault();

    if (
      !newCharName ||
      !newCharLevel ||
      !newCharRace ||
      !newCharClass ||
      !newCharHp ||
      !newCharAc ||
      !newCharSheet
    ) {
      setFormError(true);
      console.log("error");
      return;
    }

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
    <form className={styles.form}>
      <h1 className={styles.title}>Create a new character</h1>
      <div className={styles.body}>
        <div className={styles.inputs}>
          <Input
            value={newCharName}
            handleOnChange={(e) => setNewCharName(e.target.value)}
            label="Name"
            type="text"
          />
          <Input
            value={newCharLevel}
            handleOnChange={(e) => setNewCharLevel(e.target.value)}
            label="Level"
            type="number"
          />
          <Input
            value={newCharRace}
            handleOnChange={(e) => setNewCharRace(e.target.value)}
            label="Race"
            type="text"
          />
          <Input
            value={newCharClass}
            handleOnChange={(e) => setNewCharClass(e.target.value)}
            label="Class"
            type="text"
          />
          <Input
            value={newCharHp}
            handleOnChange={(e) => setNewCharHp(e.target.value)}
            label="HP"
            type="number"
          />
          <Input
            value={newCharAc}
            handleOnChange={(e) => setNewCharAc(e.target.value)}
            label="AC"
            type="number"
          />
          <Input
            value={newCharSheet}
            handleOnChange={(e) => setNewCharSheet(e.target.value)}
            label="Character Sheet Link"
            type="text"
          />
          {formError && (
            <div className={styles.error}>
              <div className={styles["error-icon"]}>
                <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
              </div>
              <div className={styles['error-message']}>Please fill out form completely</div>
            </div>
          )}
        </div>
      </div>
      <footer className={styles.buttonGroup}>
        <Button style="green" onClick={submitNewChar}>
          Create
        </Button>
        <Button style="red" onClick={props.closeForm}>
          Cancel
        </Button>
      </footer>
    </form>
  );
};

const FormModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop
          onConfirm={props.onConfirm}
          closeForm={props.closeForm}
        />,
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
