import React, { useState, useEffect } from "react";
import chest from "../../images/treasure.png";
import styles from "./LoginPage.module.css";
import {
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Button,
  Collapse,
  IconButton,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CheckBox } from "@mui/icons-material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn } from "../../slices/userSlice";
import { setCharacters } from "../../slices/charactersSlice";
import background from "../../images/orcus.jpeg";

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
      <form className={styles} onSubmit={login}>
        <h1>Initiative</h1>
        <br />
        <img src={chest} width="50" height="50" />
        <h2>Sign in</h2>
        <div className={styles["input-container"]}>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
            id="username"
            label="Username"
            name="username"
            aria-labelledby="label-username"
            autoFocus
            ></input>
            <label className={styles["label"]} for='username' id='label-username'>
              <div className={styles["text"]}>Username</div>
            </label>
        </div>
        <div className={styles["input-container"]}>
          <input
            value={password}
            onChange={handlePasswordChange}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            aria-labelledby="label-password"
            />
            <label className={styles["label"]} for='password' id='label-password'>
              <div className={styles["text"]}>Password</div>
            </label>
        </div>

        {credentialsError && (
          <div>
            <span>Invalid Credentials</span>
            <button>X</button>
          </div>
        )}
        <FormControlLabel
          control={<CheckBox defaultChecked />}
          label="Remember me"
          sx={{ margin: "10px" }}
        />
        <button type="submit" variant="contained" sx={{ margin: "10px" }}>
          Sign in
        </button>
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
