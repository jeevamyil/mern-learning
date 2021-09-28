import React from "react";
import "./Modal.css";

const Modal = (props) => {
  if (!props.state) {
    return null;
  }
  return (
    <div className="Modal" onClick={props.click}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="ModalHeader">
          <h4>Map</h4>
        </div>
        <div className="ModalBody">Body</div>
        <div className="ModalFooter">
          <footer>
            <div>
              <button onClick={props.click}>Close </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
