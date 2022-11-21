import Login from "./components/Login";
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
    <Box sx={{ display: "flex", justifyContent: "row", height: "100vh" }}>
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
      {homepage === "signin" && (
        <Login
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
    </Box>
  );
};

export default App;
