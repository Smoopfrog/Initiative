import Tabs from "./Tabs";
import styles from './SideBar.module.css'

const SideBar = (props) => {
  return (
    <div className={styles['side-bar']}>
      <Tabs />
    </div>
  );
};

export default SideBar;
