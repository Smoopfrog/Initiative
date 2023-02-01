import styles from "./HomePage.module.css";
import GameRoom from "./GameRoom/GameRoom";
import SideBar from "./SideBar";
import { useState } from "react";

const HomePage = (props) => {
  const [gameCharacters, setGameCharacters] = useState([]);

  return (
    <div className={styles.homepage}>
      <GameRoom
        gameCharacters={gameCharacters}
        setGameCharacters={setGameCharacters}
      />
      <SideBar
        playerCharacters={props.playerCharacters}
        setPlayerCharacters={props.setPlayerCharacters}
        gameCharacters={gameCharacters}
        setGameCharacters={setGameCharacters}
      />
    </div>
  );
};

export default HomePage;
