import React, { useState, useEffect } from "react";
import styles from "./LoginPage.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import chest from "../../../images/treasure.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn } from "../../../slices/userSlice";
import { setCharacters } from "../../../slices/charactersSlice";

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
            dispatch(
              logIn({
                id: response.data[0].id,
                username: response.data[0].username,
              })
            );
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
        dispatch(setCharacters(res.data));
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
      .then((res) => {
        if (res.data) {
          localStorage.setItem("isLoggedIn", username);
          dispatch(logIn({ id: res.data.id, username: res.data.username }));
          getUserCharacters(res.data.id);
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
      <form className={styles.form}>
        <h1 className={styles.title}>Initiative</h1>
        <img
          className={styles.chest}
          src={chest}
          width="50"
          height="50"
          alt="chest"
        />
        <h2 className={styles.subtitle}>Sign in</h2>
        <div className={styles.inputs}>
          <Input
            value={username}
            handleOnChange={handleUsernameChange}
            label="Username"
          />
          <Input
            value={password}
            handleOnChange={handlePasswordChange}
            label="Password"
            type="password"
          />
          {credentialsError && (
            <div className={styles.error}>
              <span className={styles["error-icon"]}>
                <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
              </span>
              <span>Invalid Credentials</span>
            </div>
          )}
        </div>
        <Button style="login-button" onClick={login}>
          Sign In
        </Button>
        <div className={styles.options}>
          <Button style="options-button" onClick={() => setHomepage("signup")}>
            Don't have an account? Sign Up
          </Button>
          <Button style="options-button">Forgot your password?</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
