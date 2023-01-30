import React, { useState, useEffect } from "react";
import styles from "./LoginPage.module.css";
import Input from "../UI/Input";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import chest from "../../images/treasureOpen.png";
import { useDispatch } from "react-redux";
import { logIn } from "../../slices/userSlice";

const SignupPage = ({ setHomepage }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setUsernameError(false);
  }, [username]);

  const onSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }

    const userData = {
      username: username,
      password: password,
    };

    axios
      .post("/users", userData)
      .then(function (response) {
        if (response.data.length) {
          setUsernameError(true);
        } else {
          dispatch(
            logIn({
              username: username,
              password: password,
              loggedIn: true,
            })
          );
          setHomepage("signedIn");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <Box
      component="form"
      onSubmit={onSignUp}
      sx={{
        width: { xs: "100vw", md: "40vw" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
        height: "70vh",
        justifyContent: "center",
      }}
    >
      <Typography margin="10px" component="h1" variant="h2">
        Initiative
      </Typography>
      <br />
      <img src={chest} width="50" height="50" />
      <Typography margin="10px" component="h1" variant="h4">
        Sign up
      </Typography>
      <Input
        value={username}
        handleOnChange={handleUsernameChange}
        label="Username"
      />
      {usernameError && (
        <div className={styles.error}>
          <span className={styles["error-icon"]}>
            <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
          </span>
          <span>Username already taken!</span>
        </div>
      )}
      <Input
        value={password}
        handleOnChange={handlePasswordChange}
        label="Password"
      />
      <Input
        value={confirmPassword}
        handleOnChange={handleConfirmPasswordChange}
        label="Confirm Password"
      />
      {passwordError && (
        <div className={styles.error}>
          <span className={styles["error-icon"]}>
            <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
          </span>
          <span>Passwords do not match!</span>
        </div>
      )}
      <Button type="submit" variant="contained" sx={{ margin: "10px" }}>
        Sign Up
      </Button>
      <Box width="100%" display="flex" justifyContent="center">
        <Button
          onClick={() => setHomepage("signin")}
          sx={{ textTransform: "none" }}
        >
          Already have an account? Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default SignupPage;
