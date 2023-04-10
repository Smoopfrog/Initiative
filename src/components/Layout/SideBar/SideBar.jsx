import Tabs from "./Tabs";
import styles from "./SideBar.module.css";
import { useEffect, useState } from "react";
import CharacterTab from "./Characters/CharacterTab";
import ProfileTab from "./Profile/ProfileTab";
import MonsterManualTab from "./MonsterManual/MonsterManualTab";
import Button from "../../UI/Button";

const SideBar = ({ setHomepage }) => {
  const [currentTab, setCurrentTab] = useState("characters");
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 480) {
      setShowSideBar(true);
    }
  }, []);

  const tabHandler = (tabName) => {
    setCurrentTab(tabName);
  };

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className={styles["side-bar"]}>
      <div className={styles.header}>
        <div className={styles["btn-container"]}></div>
        <div className={styles.title}>Initiative</div>
        <div className={styles["btn-container"]}>
          <Button style="toggle-sidebar" onClick={toggleSideBar}>
            <i class="fa-solid fa-bars fa-xl"></i>
          </Button>
        </div>
      </div>
      {showSideBar && (
        <div className={styles["tab-container"]}>
          <Tabs onClick={tabHandler} currentTab={currentTab} />
          {currentTab === "characters" && <CharacterTab />}
          {currentTab === "monsterManual" && <MonsterManualTab />}
          {currentTab === "profile" && <ProfileTab setHomepage={setHomepage} />}
        </div>
      )}
    </div>
  );
};

export default SideBar;
