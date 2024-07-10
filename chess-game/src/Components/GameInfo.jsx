import React from "react";

const GameInfo = ({ currentPlayer, openModal, restartGame }) => {
  return (
    <div className="info">
      <p>
        Current Turn: Player {currentPlayer} (
        {currentPlayer === 1 ? "White" : "Black"})
      </p>
      <button className="quit-button" onClick={openModal}>
        Quit
      </button>
      <button className="restart-button" onClick={restartGame}>
        Restart
      </button>
    </div>
  );
};

export default GameInfo;
