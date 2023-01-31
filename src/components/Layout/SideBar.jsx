import Tabs from "./Tabs";
import styles from "./SideBar.module.css";
import { useState } from "react";
import CharacterTab from "../Menu/CharacterTab";
import ProfileTab from "../Menu/ProfileTab";
import MonsterManualTab from "../Menu/MonsterManualTab";

const SideBar = (props) => {
  const [currentTab, setCurrentTab] = useState("characters");

  const tabHandler = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <div className={styles["side-bar"]}>
      <div className={styles.header}>
        <h1>Initiative</h1>
      </div>
      <Tabs onClick={tabHandler} />
      {currentTab === "characters" && (
        <CharacterTab
          playerCharacters={props.playerCharacters}
          setPlayerCharacters={props.setPlayerCharacters}
          gameCharacters={props.gameCharacters}
          setGameCharacters={props.setGameCharacters}
        />
      )}
      {currentTab === "monsterManual" && (
        <MonsterManualTab setGameCharacters={props.setGameCharacters} />
      )}
      {currentTab === "profile" && <ProfileTab />}
    </div>
  );
};

export default SideBar;
