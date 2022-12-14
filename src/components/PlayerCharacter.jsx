import { Box, Typography, Card, Link, Button } from "@mui/material";
import React from "react";
import halfling from "../images/Ivan_Kaslov-0.webp";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../slices/charactersSlice";
import ConfirmationModal from "./ConfirmationModal";
import { useState } from "react";
// import { inGame } from "../slices/userSlice";

const PlayerCharacter = (props) => {
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
      {showConfirmationModal && <ConfirmationModal name={props.charName} closeForm={confirmationModalHandler} onConfirm={deleteChar}/>}
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          margin: "10px",
          padding: "10px",
          background: "oldlace",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img src={halfling} width="20%" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">{props.charName}</Typography>
            <Typography variant="h12">
              Lv.{props.level} {props.race} {props.class}
            </Typography>
            {props.charSheetUrl && (
              <Link
                href={props.charSheetUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Character Sheet
              </Link>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "light-blue", color: "white" }}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </Button>
          <Button
            onClick={addCharacter}
            variant="contained"
            sx={{ backgroundColor: "Green", color: "white" }}
          >
            <i className="fa-solid fa-plus"></i>
          </Button>
          <Button
            onClick={confirmationModalHandler}
            variant="contained"
            color="error"
            type={"trash"}
          >
            <i className="fa-solid fa-trash-can"></i>
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default PlayerCharacter;
