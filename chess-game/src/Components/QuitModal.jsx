import React from "react";
import Modal from "react-modal";

const QuitModal = ({ isOpen, closeModal, handleQuit, currentPlayer }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Quit Confirmation"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Are you sure you want to quit?</h2>
      <button onClick={handleQuit} className="modal-button">
        Yes
      </button>
      <button onClick={closeModal} className="modal-button">
        No
      </button>
    </Modal>
  );
};

export default QuitModal;
