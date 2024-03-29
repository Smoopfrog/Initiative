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
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [emptyInputError, setEmptyInputError] = useState(false);
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
    if (!emptyInputError) {
      return;
    }

    setEmptyInputError(true);

    const errorTimer = setTimeout(() => {
      setEmptyInputError(false);
    }, 3000);

    return () => clearTimeout(errorTimer);
  }, [emptyInputError]);

  useEffect(() => {
    if (!passwordMatchError) {
      return;
    }

    setPasswordMatchError(true);

    const errorTimer = setTimeout(() => {
      setPasswordMatchError(false);
    }, 3000);

    return () => clearTimeout(errorTimer);
  }, [passwordMatchError]);

  useEffect(() => {
    if (!passwordLengthError) {
      return;
    }

    setPasswordLengthError(true);

    const errorTimer = setTimeout(() => {
      setPasswordLengthError(false);
    }, 3000);

    return () => clearTimeout(errorTimer);
  }, [passwordLengthError]);

  useEffect(() => {
    setUsernameError(false);
  }, [username]);

  const onSignUp = async (e) => {
    e.preventDefault();

    if (!password) {
      setEmptyInputError(true);
      return;
    }
    
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    if (password.length < 8) {
      setPasswordLengthError(true);
      return;
    }

    const userData = {
      username: username,
      password: password,
    };

    axios
      .post("/users", userData)
      .then((response) => {
        if (response.data) {
          dispatch(
            logIn({
              ...response.data,
              loggedIn: true,
            })
          );
          setHomepage("signedIn");
        } else {
          setUsernameError(true);
        }
      })
      .catch((error) => {
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
        <h1 className={styles.title}>Initiative</h1>
        <img src={chest} width="50" height="50" alt="Orcus the great" />
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
        </div>
          {passwordMatchError && (
            <div className={styles.error}>
              <span className={styles["error-icon"]}>
                <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
              </span>
              <span>Passwords do not match</span>
            </div>
          )}
          {emptyInputError && (
            <div className={styles.error}>
              <span className={styles["error-icon"]}>
                <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
              </span>
              <span>Fill in all the fields</span>
            </div>
          )}
          {passwordLengthError && (
            <div className={styles.error}>
              <span className={styles["error-icon"]}>
                <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
              </span>
              <span>Password not long enough</span>
            </div>
          )}
        <Button style="login-button" onClick={onSignUp}>
          Sign Up
        </Button>
        <div className={styles["signup-options"]}>
          <Button style="options-button" onClick={() => setHomepage("signin")}>
            Already have an account? Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
