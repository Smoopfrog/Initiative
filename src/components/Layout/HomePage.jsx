import styles from "./HomePage.module.css";
import GameRoom from "./GameRoom/GameRoom";
import SideBar from "./SideBar/SideBar";

const HomePage = ({ setHomepage }) => {

  return (
    <div className={styles.homepage}>
      <GameRoom />
      <SideBar setHomepage={setHomepage} />
    </div>
  );
};

export default HomePage;
