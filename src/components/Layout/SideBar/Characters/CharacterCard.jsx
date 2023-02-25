import { useState } from "react";
import axios from "axios";
import ConfirmationModal from "../../../UI/ConfirmationModal";
import CharacterForm from "./CharacterForm";
import Button from "../../../UI/Button";
import styles from "./CharacterCard.module.css";

const CharacterCard = (props) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showEditFrom, setShowEditForm] = useState(false);

  const confirmationModalHandler = () => {
    setShowConfirmationModal(!showConfirmationModal);
  };

  const editFormHandler = () => {
    setShowEditForm(!showEditFrom);
  };

  const addCharacter = () => {
    const char = {
      id: Date.now(),
      ac: props.ac,
      name: props.name,
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
    <div className={styles.card}>
      {showConfirmationModal && (
        <ConfirmationModal
          name={props.name}
          closeForm={confirmationModalHandler}
          onConfirm={deleteChar}
        />
      )}
      {showEditFrom && (
        <CharacterForm
          closeForm={editFormHandler}
          character={props.character}
          type="editChar"
          setPlayerCharacters={props.setPlayerCharacters}
        />
      )}
      <div className={styles.character}>
        {/* <img src={props.img} width="25%" /> */}
        <div className={styles.info}>
          <h1 className={styles["char-name"]}>{props.name}</h1>
          <h3>
            Lv.{props.level} {props.race} {props.class}
          </h3>
          <div className={styles["stat-block"]}>
            <p>
              <span className={styles["stat-title"]}>Hit Points</span>{" "}
              {props.hp}
            </p>
            <p>
              <span className={styles["stat-title"]}>Armor Class</span>{" "}
              {props.ac}
            </p>
          </div>
          {props.charSheetUrl && (
            <h3>
              <a
                href={props.charSheetUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Character Sheet
              </a>
            </h3>
          )}
        </div>
      </div>
      <div className={styles.buttons}>
        <Button onClick={editFormHandler}>
          <i className="fa-solid fa-pen-to-square"></i>
        </Button>
        <Button style="green" onClick={addCharacter}>
          <i className="fa-solid fa-plus"></i>
        </Button>
        <Button style="red" onClick={confirmationModalHandler}>
          <i className="fa-solid fa-trash-can"></i>
        </Button>
      </div>
    </div>
  );
};

export default CharacterCard;
