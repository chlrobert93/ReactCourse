import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function onButtonClick() {
     setModalIsOpen(true);
  }

  function OnBackdropClick(){
    //console.log(props.text);
    setModalIsOpen(false);
  }

  return (
   <div > 
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={onButtonClick}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={OnBackdropClick} onConfirm={OnBackdropClick} />}
      {modalIsOpen ? <Backdrop onCancel={OnBackdropClick} /> : null}
    </div>
    </div>
  );
}

export default Todo;
