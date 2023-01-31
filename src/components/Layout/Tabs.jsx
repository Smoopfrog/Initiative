import styles from "./Tabs.module.css"
import Button from "../UI/Button";

const Tabs = (props) => {
  return (
    <div className={styles.tabs}>
      <Button>Characters</Button>
      <Button>Monster Manual</Button>
      <Button>Profile</Button>
    </div>
  );
};

export default Tabs;
