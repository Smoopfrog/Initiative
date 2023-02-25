import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../slices/userSlice";
import { setCharacters } from "../../../../slices/charactersSlice";
import axios from "axios";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import ModalBackdrop from "../../../UI/ModalBackdrop.jsx";
import styles from "./CharacterForm.module.css";

const CharacterForm = ({
  character,
  closeForm,
  type,
}) => {
  const [name, setName] = useState(
    type === "editChar" ? character.name : ""
  );
  const [level, setLevel] = useState(
    type === "editChar" ? character.level : ""
  );
  const [race, setRace] = useState(
    type === "editChar" ? character.race : ""
  );
  const [clas, setClas] = useState(
    type === "editChar" ? character.class : ""
  );
  const [hp, setHp] = useState(
    type === "editChar" ? character.hp : ""
  );
  const [ac, setAc] = useState(
    type === "editChar" ? character.ac : ""
  );
  const [charSheet, setCharSheet] = useState(
    type === "editChar" ? character.charsheet : ""
  );
  const [formError, setFormError] = useState();
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

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

  const submitEditedCharacter = async (event) => {
    event.preventDefault();

    if (
      !name ||
      !level ||
      !race ||
      !clas ||
      !hp ||
      !ac ||
      !charSheet
    ) {
      setFormError(true);
      return;
    }

    const editedCharacter = {
      name,
      level,
      race,
      clas,
      hp,
      ac,
      charSheet,
      id: character.id,
      userId: character.user_id,
    };

    axios
      .patch("/characters", editedCharacter)
      .then((res) => {
        dispatch(setCharacters(res.data));
        closeForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitNewCharacter = async (event) => {
    event.preventDefault();

    if (
      !name ||
      !level ||
      !race ||
      !clas ||
      !hp ||
      !ac ||
      !charSheet
    ) {
      setFormError(true);
      return;
    }

    const newCharacter = {
      name,
      level,
      race,
      clas,
      hp,
      ac,
      charSheet,
      userId: user.id,
    };

    await axios
      .post("/characters", newCharacter)
      .then((res) => {
        dispatch(setCharacters(res.data))
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
            value={name}
            handleOnChange={(e) => setName(e.target.value)}
            label="Name"
            type="text"
          />
          <Input
            value={level}
            handleOnChange={(e) => setLevel(e.target.value)}
            label="Level"
            type="number"
          />
          <Input
            value={race}
            handleOnChange={(e) => setRace(e.target.value)}
            label="Race"
            type="text"
          />
          <Input
            value={clas}
            handleOnChange={(e) => setClas(e.target.value)}
            label="Class"
            type="text"
          />
          <Input
            value={hp}
            handleOnChange={(e) => setHp(e.target.value)}
            label="HP"
            type="number"
          />
          <Input
            value={ac}
            handleOnChange={(e) => setAc(e.target.value)}
            label="AC"
            type="number"
          />
          <Input
            value={charSheet}
            handleOnChange={(e) => setCharSheet(e.target.value)}
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
          <Button style="green" onClick={submitNewCharacter}>
            Create
          </Button>
        )}
        {type === "editChar" && (
          <Button style="green" onClick={submitEditedCharacter}>
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
        <CharacterForm
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
