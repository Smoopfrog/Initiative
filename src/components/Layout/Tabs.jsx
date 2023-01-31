import styles from "./Tabs.module.css";
import Button from "../UI/Button";

const Tabs = (props) => {
  return (
    <div className={styles.tabs}>
      <Button onClick={() => props.onClick("characters")}>Characters</Button>
      <Button onClick={() => props.onClick("monsterManual")}>
        Monster Manual
      </Button>
      <Button onClick={() => props.onClick("profile")}>Profile</Button>
    </div>
  );
};

export default Tabs;
