import React from "react";
import "./Modal.css";

const Modal = ({ score }) => {
  const restart = () => {
    window.location = '/'
  }
  return (
    <div className="modal">
      <div className="modal-title">Your score : {score}</div>
      <div onClick={restart} className="modal-btn">Restart Quiz</div>
    </div>
  );
};

export default Modal;
