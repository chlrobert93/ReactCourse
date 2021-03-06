function Modal(props) {
  
  function onButtonConfirmClick() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you shure</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={onButtonConfirmClick}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
