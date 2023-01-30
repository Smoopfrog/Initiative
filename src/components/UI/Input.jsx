import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles["input-container"]}>
      <input
        type="text"
        value={props.value}
        onChange={props.handleOnChange}
        required
        id={props.label}
        name={props.label}
        aria-labelledby={`"label-${props.label}`}
      ></input>
      <label
        className={styles["label"]}
        for={props.label}
        id={`"label-${props.label}`}
      >
        <div className={styles["text"]}>{props.label}</div>
      </label>
    </div>
  );
};

export default Input;
