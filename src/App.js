import Login from "./components/Login";
import LoginPage from "./components/Layout/LoginPage";
import Signup from "./components/Signup";
import Menu from "./components/Menu/Menu";
import background from "./images/orcus.jpeg";
import { Box } from "@mui/material";
import { useState } from "react";
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
      {homepage === "signup" && <Signup setHomepage={setHomepage} />}
      {homepage === "signedIn" && (
        <Menu
          setHomepage={setHomepage}
          playerCharacters={playerCharacters}
          setPlayerCharacters={setPlayerCharacters}
        />
      )}
    </div>
  );
};

export default App;
