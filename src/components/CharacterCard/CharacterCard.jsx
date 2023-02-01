import { useState } from "react";
import halfling from "../../images/Ivan_Kaslov-0.webp";
import axios from "axios";
import ConfirmationModal from "../ConfirmationModal";
import Button from "../UI/Button";
// import { inGame } from "../slices/userSlice";
import styles from './CharacterCard.module.css'
const CharacterCard = (props) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const char = {
    id: props.id,
    ac: props.ac,
    charName: props.charName,
    charSheetUrl: props.charSheetUrl,
    class: props.class,
    hp: props.hp,
    img: props.img,
    initiative: 0,
    level: props.level,
    race: props.race,
    userId: props.userId,
    userName: props.userName,
    selected: false,
  };

  const confirmationModalHandler = () => {
    setShowConfirmationModal(!showConfirmationModal);
  };

  const addCharacter = () => {
    props.setGameCharacters((prev) => [...prev, char]);
  };

  const deleteChar = () => {
    const params = {
      userId: props.userId,
      charId: props.id,
    };

    axios
      .delete("/characters", { params })
      .then((res) => {
        props.setPlayerCharacters([...res.data]);
      })
      .then((err) => console.log(err));
  };

  return (
    <>
      {showConfirmationModal && (
        <ConfirmationModal
          name={props.charName}
          closeForm={confirmationModalHandler}
          onConfirm={deleteChar}
        />
      )}
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          margin: "10px",
          padding: "10px",
          background: "oldlace",
        }}
      >
        <div sx={{ display: "flex" }}>
          <img src={halfling} width="20%" />
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 variant="h5">{props.charName}</h1>
            <h3 variant="h12">
              Lv.{props.level} {props.race} {props.class}
            </h3>
            {props.charSheetUrl && (
              <a href={props.charSheetUrl}>Character Sheet</a>
            )}
          </div>
        </div>
        <div className={styles.buttons}>
          <Button>
            <i className="fa-solid fa-pen-to-square"></i>
          </Button>
          <Button onClick={addCharacter}>
            <i className="fa-solid fa-plus"></i>
          </Button>
          <Button onClick={confirmationModalHandler}>
            <i className="fa-solid fa-trash-can"></i>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
