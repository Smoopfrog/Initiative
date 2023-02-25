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
      charSheet: character.charSheet,
      initiative: null,
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
        {/* <img src={props.img} width="25%" /> */}
        <div className={styles.info}>
          <h1 className={styles["char-name"]}>{character.name}</h1>
          <h3>
            Lv.{character.level} {character.race} {character.class}
          </h3>
          <div className={styles["stat-block"]}>
            <p>
              <span className={styles["stat-title"]}>Hit Points</span>{" "}
              {character.hp}
            </p>
            <p>
              <span className={styles["stat-title"]}>Armor Class</span>{" "}
              {character.ac}
            </p>
          </div>
          {character.charSheet && (
            <h3>
              <a
                href={character.charSheet}
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
