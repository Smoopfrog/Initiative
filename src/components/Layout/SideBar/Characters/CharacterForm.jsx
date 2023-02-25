import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../slices/userSlice";
import axios from "axios";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import ModalBackdrop from "../../../UI/ModalBackdrop.jsx";
import styles from "./CharacterForm.module.css";

const NewCharacterForm = ({
  character,
  setPlayerCharacters,
  closeForm,
  type,
}) => {
  const [newCharName, setNewCharName] = useState(
    type === "editChar" ? character.name : ""
  );
  const [newCharLevel, setNewCharLevel] = useState(
    type === "editChar" ? character.level : ""
  );
  const [newCharRace, setNewCharRace] = useState(
    type === "editChar" ? character.race : ""
  );
  const [newCharClass, setNewCharClass] = useState(
    type === "editChar" ? character.class : ""
  );
  const [newCharHp, setNewCharHp] = useState(
    type === "editChar" ? character.hp : ""
  );
  const [newCharAc, setNewCharAc] = useState(
    type === "editChar" ? character.ac : ""
  );
  const [newCharSheet, setNewCharSheet] = useState(
    type === "editChar" ? character.charsheet : ""
  );
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

  const submitEditedChar = async (event) => {
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

    const editedChar = {
      newCharName,
      newCharLevel,
      newCharRace,
      newCharClass,
      newCharHp,
      newCharAc,
      newCharSheet,
      id: character.id,
      userId: character.user_id,
    };

    axios
      .patch("/characters", editedChar)
      .then((res) => {
        setPlayerCharacters(res.data);
        closeForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        setPlayerCharacters(res.data);
        closeForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className={styles.form}>
      {type === "newChar" && (
        <h1 className={styles.title}>Create a new character</h1>
      )}
      {type === "editChar" && (
        <h1 className={styles.title}>Edit {character.name}</h1>
      )}
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
              <div className={styles["error-message"]}>
                Please fill out form completely
              </div>
            </div>
          )}
        </div>
      </div>
      <footer className={styles.buttonGroup}>
        {type === "newChar" && (
          <Button style="green" onClick={submitNewChar}>
            Create
          </Button>
        )}
        {type === "editChar" && (
          <Button style="green" onClick={submitEditedChar}>
            Save Changes
          </Button>
        )}
        <Button style="red" onClick={closeForm}>
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
          setPlayerCharacters={props.setPlayerCharacters}
          character={props.character}
          type={props.type}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default FormModal;
