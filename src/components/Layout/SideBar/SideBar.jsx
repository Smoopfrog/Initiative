import Tabs from "./Tabs";
import styles from "./SideBar.module.css";
import { useState } from "react";
import CharacterTab from "./Characters/CharacterTab";
import ProfileTab from "./Profile/ProfileTab";
import MonsterManualTab from "./MonsterManual/MonsterManualTab";

const SideBar = () => {
  const [currentTab, setCurrentTab] = useState("characters");

  const tabHandler = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <div className={styles["side-bar"]}>
      <div className={styles.header}>
        <h1>Initiative</h1>
      </div>
      <Tabs onClick={tabHandler} currentTab={currentTab} />
      {currentTab === "characters" && <CharacterTab />}
      {currentTab === "monsterManual" && <MonsterManualTab />}
      {currentTab === "profile" && <ProfileTab />}
    </div>
  );
};

export default SideBar;
