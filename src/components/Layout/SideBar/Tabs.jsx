import styles from "./Tabs.module.css";
import Button from "../../UI/Button";

const Tabs = ({ currentTab, onClick }) => {
  return (
    <div className={styles.tabs}>
      <Button
        onClick={() => onClick("characters")}
        style={currentTab === "characters" ? "tab-active" : "tab"}
      >
        Characters
      </Button>
      <Button
        onClick={() => onClick("monsterManual")}
        style={currentTab === "monsterManual" ? "tab-active" : "tab"}
      >
        Monster Manual
      </Button>
      <Button
        onClick={() => onClick("profile")}
        style={currentTab === "profile" ? "tab-active" : "tab"}
      >
        Profile
      </Button>
    </div>
  );
};

export default Tabs;
