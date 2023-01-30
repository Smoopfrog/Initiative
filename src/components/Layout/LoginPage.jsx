import React, { useState, useEffect } from "react";
import chest from "../../images/treasure.png";
import styles from "./LoginPage.module.css";
import { Box } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn } from "../../slices/userSlice";
import { setCharacters } from "../../slices/charactersSlice";
import background from "../../images/orcus.jpeg";
import Input from "../UI/Input";

const LoginPage = ({ setHomepage, setPlayerCharacters }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [credentialsError, setCredentialsError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = localStorage.getItem("isLoggedIn");
    if (localStorage.getItem("isLoggedIn")) {
      axios
        .get("/loggedIn", { params })
        .then(function (response) {
          if (response.data.length) {
            dispatch(logIn(response.data[0]));
            getUserCharacters(response.data[0].id);
            setHomepage("signedIn");
            return;
          }
          setCredentialsError(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    setCredentialsError(false);
  }, [username, password]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const getUserCharacters = (id) => {
    const params = {
      userId: id,
    };

    axios
      .get("/characters", { params })
      .then((res) => {
        setPlayerCharacters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = (e) => {
    e.preventDefault();

    const params = {
      username: username,
      password: password,
    };

    axios
      .get("/users", { params })
      .then(function (response) {
        if (response.data.length) {
          localStorage.setItem("isLoggedIn", username);
          dispatch(logIn(response.data[0]));
          getUserCharacters(response.data[0].id);
          setHomepage("signedIn");
          return;
        }
        setCredentialsError(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!credentialsError) {
      return;
    }

    setCredentialsError(true);

    const errorTimer = setTimeout(() => {
      setCredentialsError(false);
    }, 3000);

    return () => clearTimeout(errorTimer);
  }, [credentialsError]);

  return (
    <div className={styles.page}>
      <div className={styles["home-image"]}></div>
      <form className={styles} onSubmit={login}>
        <h1>Initiative</h1>
        <br />
        <img src={chest} width="50" height="50" />
        <h2>Sign in</h2>
        <Input
          value={username}
          handleOnChange={handleUsernameChange}
          label="Username"
        />
        <Input
          value={password}
          handleOnChange={handlePasswordChange}
          label="Password"
        />
        {credentialsError && (
          <div className={styles.error}>
            <span className={styles["error-icon"]}>
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
            </span>
            <span>Invalid Credentials</span>
          </div>
        )}
        <button type="submit">Sign in</button>
        <div className={styles.options}>
          <button className={styles["options-button"]}>
            Forgot your password?
          </button>
          <button
            onClick={() => setHomepage("signup")}
            className={styles["options-button"]}
          >
            Don't have an account? Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
