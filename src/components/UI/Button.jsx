import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles[`${props.style}`]}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
