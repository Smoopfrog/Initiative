import Button from "../../UI/Button";
import styles from "./Controller.module.css";

const Controller = (props) => {
  return (
    <div className={styles.card}>
      {props.playerTurn()}
      <div>
        <Button onClick={props.prevChar}>
          <i className="fa-solid fa-arrow-left"></i>
        </Button>
        <Button onClick={props.sortButtonHandler}>Sort</Button>
        <Button onClick={props.nextChar}>
          <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
};

export default Controller;
