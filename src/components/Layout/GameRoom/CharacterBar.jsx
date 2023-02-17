import styles from "./CharacterBar.module.css";

const CharacterBar = (props) => {
  return (
    <div className={styles.container}>
      <i class="fa-solid fa-play"></i>
      <span>Name</span>
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-shield-halved"></i>
    </div>
  );
};

export default CharacterBar;
