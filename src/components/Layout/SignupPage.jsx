import React, { useState, useEffect } from "react";
import styles from "./LoginPage.module.css";
import Input from "../UI/Input";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import chest from "../../images/treasureOpen.png";
import { useDispatch } from "react-redux";
import { logIn } from "../../slices/userSlice";
import background from "../../images/orcus.jpeg";

const SignupPage = ({ setHomepage }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!usernameError) {
      return;
    }

    setUsernameError(true);

    const errorTimer = setTimeout(() => {
      setUsernameError(false);
    }, 3000);

    return () => clearTimeout(errorTimer);
  }, [usernameError]);

  useEffect(() => {
    if (!passwordError) {
      return;
    }

    setPasswordError(true);

    const errorTimer = setTimeout(() => {
      setPasswordError(false);
    }, 3000);

    return () => clearTimeout(errorTimer);
  }, [passwordError]);

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
    <div className={styles.page}>
      <Box
        sx={{
          height: "100vh",
          width: { xs: "0vw", md: "60vw" },
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <form>
        <h1>Initiative</h1>
        <br />
        <img src={chest} width="50" height="50" />
        <h2>Sign up</h2>
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
        <button type="submit">Sign Up</button>
        <button onClick={() => setHomepage("signin")} className={styles["options-button"]}>
          Already have an account? Sign In
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
