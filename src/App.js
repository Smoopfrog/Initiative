import { useState } from "react";
import LoginPage from "./components/Layout/SignIn/LoginPage";
import SignupPage from "./components/Layout/SignIn/SignupPage";
import HomePage from "./components/Layout/HomePage";

const axios = require("axios").default;
axios.defaults.baseURL = "http://localhost:7001";

const App = () => {
  const [homepage, setHomepage] = useState("signin");
  const [playerCharacters, setPlayerCharacters] = useState([]);

  return (
    <div>
      {homepage === "signin" && (
        <LoginPage
          setHomepage={setHomepage}
          setPlayerCharacters={setPlayerCharacters}
        />
      )}
      {homepage === "signup" && <SignupPage setHomepage={setHomepage} />}
      {homepage === "signedIn" && (
        <HomePage
          setHomepage={setHomepage}
          playerCharacters={playerCharacters}
          setPlayerCharacters={setPlayerCharacters}
        />
      )}
    </div>
  );
};

export default App;
