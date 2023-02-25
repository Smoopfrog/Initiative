import React, { useState, useEffect } from "react";
import styles from "./LoginPage.module.css";
import Input from "../../UI/Input";
import chest from "../../../images/treasureOpen.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn } from "../../../slices/userSlice";
import Button from "../../UI/Button";

const SignupPage = ({ setHomepage }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();

  // const saltRounds = 10;

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

    // bcrypt.genSalt(saltRounds, (err, salt) => {
    //   bcrypt.hash(password, salt, function (err, hash) {
    //     // returns hash
    //     console.log(hash);
    //   });
    // });

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
      <div className={styles["home-image"]}></div>
      <form className={styles.form}>
        <h1>Initiative</h1>
        <br />
        <img src={chest} width="50" height="50" alt="Orcus the great"/>
        <h2 className={styles.subtitle}>Sign up</h2>
        <div className={styles.inputs}>
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
            type="password"
          />
          <Input
            value={confirmPassword}
            handleOnChange={handleConfirmPasswordChange}
            label="Confirm Password"
            type="password"
          />
          {passwordError && (
            <div className={styles.error}>
              <span className={styles["error-icon"]}>
                <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
              </span>
              <span>Passwords do not match!</span>
            </div>
          )}
        </div>
        <Button onClick={onSignUp}>Sign Up</Button>
        <Button style="options-button" onClick={() => setHomepage("signin")}>
          Already have an account? Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignupPage;
