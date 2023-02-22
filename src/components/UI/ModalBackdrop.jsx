import styles from "./Backdrop.module.css";

const ModalBackdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.closeForm} />;
};

export default ModalBackdrop