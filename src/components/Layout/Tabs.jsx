import styles from "./Tabs.module.css";
import Button from "../UI/Button";

const Tabs = (props) => {
  console.log(props.currentTab)

  return (
    <div className={styles.tabs}>
      <Button onClick={() => props.onClick("characters")} style={props.currentTab === "characters" ? "tab-active" : "tab"}>
        Characters
      </Button>
      <Button onClick={() => props.onClick("monsterManual")} style={props.currentTab === "monsterManual" ? "tab-active" : "tab"}>
        Monster Manual
      </Button>
      <Button onClick={() => props.onClick("profile")} style={props.currentTab === "profile" ? "tab-active" : "tab"}>
        Profile
      </Button>
    </div>
  );
};

export default Tabs;
