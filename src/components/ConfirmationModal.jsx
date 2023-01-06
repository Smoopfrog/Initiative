import ModalBackdrop from "./ModalBackdrop";
import ReactDOM from "react-dom";
import modalStyles from "./Backdrop.module.css";
import styles from "./ConfirmationModal.module.css";

const ConfirmationPopUp = (props) => {
  return (
    <div className={modalStyles.modal}>
      <div onClick={props.closeForm} className={styles.closeIcon}>
        <i  class="fa-solid fa-x"></i>
      </div>
      <div className={styles.container}>
        <span className={styles.garbageIcon}>
          <i className="fa-solid fa-trash-can"></i>
        </span>
        <h1>Are you sure?</h1>
        <p>
          Are you sure you want to delete {props.name}? This process cannot be
          undone.
        </p>
        <div className={styles.buttons}>
          <button
            className={styles.button + " " + styles.cancelButton}
            onClick={props.closeForm}
          >
            Cancel
          </button>
          <button
            className={styles.button + " " + styles.deleteButton}
            onClick={props.onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const ConfirmationModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop
          onConfirm={props.onConfirm}
          closeForm={props.closeForm}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ConfirmationPopUp
          onConfirm={props.onConfirm}
          closeForm={props.closeForm}
          name={props.name}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ConfirmationModal;
