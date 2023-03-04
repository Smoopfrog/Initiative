import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../../../../slices/charactersSlice";
import { setGameRoomCharacters } from "../../../../slices/gameRoomSlice";
import { selectGameRoomCharacters } from "../../../../slices/gameRoomSlice";
import axios from "axios";
import CharacterForm from "./CharacterForm";
import ConfirmationModal from "../../../UI/ConfirmationModal";
import Button from "../../../UI/Button";
import styles from "./CharacterCard.module.css";

const CharacterCard = ({ character, user }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showEditFrom, setShowEditForm] = useState(false);
  const gameRoomCharacters = useSelector(selectGameRoomCharacters);
  const dispatch = useDispatch();

  const confirmationModalHandler = () => {
    setShowConfirmationModal(!showConfirmationModal);
  };

  const editFormHandler = () => {
    setShowEditForm(!showEditFrom);
  };

  const addCharacter = () => {
    const char = {
      id: Date.now(),
      name: character.name,
      level: character.level,
      race: character.race,
      class: character.class,
      hp: character.hp,
      ac: character.ac,
      charSheet: character.charsheet,
      initiative: 0,
      selected: false,
    };

    dispatch(setGameRoomCharacters([...gameRoomCharacters, char]));
  };

  const deleteChar = () => {
    const params = {
      userId: user.id,
      charId: character.id,
    };

    axios
      .delete("/characters", { params })
      .then((res) => {
        dispatch(setCharacters(res.data));
      })
      .then((err) => console.log(err));
  };

  return (
    <div className={styles.card}>
      {showConfirmationModal && (
        <ConfirmationModal
          name={character.name}
          closeForm={confirmationModalHandler}
          onConfirm={deleteChar}
        />
      )}
      {showEditFrom && (
        <CharacterForm
          closeForm={editFormHandler}
          character={character}
          type="editChar"
        />
      )}
      <div className={styles.character}>
        <div className={styles.info}>
          <h1 className={styles["char-name"]}>
            <a
              href={character.charsheet}
              target="_blank"
              rel="noreferrer noopener"
            >
              {character.name}
            </a>
          </h1>
          <div className={styles["char-details"]}>
            <p className={styles["char-info"]}>
              Lv. {character.level} {character.race} {character.class}
            </p>
            <p>
              <span className={styles["stat-title"]}>Hit Points</span>{" "}
              {character.hp}
            </p>
            <p>
              <span className={styles["stat-title"]}>Armor Class</span>{" "}
              {character.ac}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles["edit-button"]}>
          <i
            className="fa-solid fa-pen-to-square"
            onClick={editFormHandler}
          ></i>
        </div>
        <div className={styles["add-button"]}>
          <i className="fa-solid fa-plus" onClick={addCharacter}></i>
        </div>
        <div className={styles["delete-button"]}>
          <i
            className="fa-solid fa-trash-can"
            onClick={confirmationModalHandler}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
