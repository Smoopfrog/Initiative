import ModalBackdrop from "./ModalBackdrop";
import ReactDOM from "react-dom";
import styles from "./Backdrop.module.css";
const ConfirmationPopUp = (props) => {
  return (
    <div className={styles.modal}>
      <header>Confirm?</header>
      <p>Are you sure you want to delete {props.name}?</p>
      <footer>
        <button onClick={props.closeForm}>Cancel</button>
        <button onClick={props.onConfirm}>Delete</button>
      </footer>
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
