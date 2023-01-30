import MonsterManualTab from "../Menu/MonsterManualTab";
import GameRoom from "./GameRoom/GameRoom";
import SideBar from "./SideBar";
import styles from "./HomePage.module.css";
import { useState } from "react";

const HomePage = (props) => {
  const [gameCharacters, setGameCharacters] = useState([]);

  return (
    <div className={styles.homepage}>
      <GameRoom
        gameCharacters={gameCharacters}
        setGameCharacters={setGameCharacters}
      />
      <MonsterManualTab setGameCharacters={setGameCharacters}/>
    </div>
  );
};

export default HomePage;
