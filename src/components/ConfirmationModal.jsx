
const ConfirmationModal = (props) => {
  return (
    <>
      <header>Confirm?</header>
      <p>Are you sure you want to delete characterName?</p>
      <footer>
        <button>Cancel</button>
        <button>Delete</button>
      </footer>
    </>
  );
};

export default ConfirmationModal;
