import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles["input-container"]}>
      <input
        className={styles.input}
        type={props.type}
        value={props.value}
        onChange={props.handleOnChange}
        required
        id={props.label}
        name={props.label}
        aria-labelledby={`"label-${props.label}`}
      ></input>
      <label
        className={styles["label"]}
        htmlFor={props.label}
        id={`"label-${props.label}`}
      >
        <div className={styles["text"]}>{props.label}</div>
      </label>
    </div>
  );
};

export default Input;
