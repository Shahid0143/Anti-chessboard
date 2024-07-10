import "./App.css";
import React, { useState, useRef } from "react";
import { Chess } from "chess.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import ChessboardComponent from "./Components/ChessboardComponent";
import QuitModal from "./Components/QuitModal";
import GameInfo from "./Components/GameInfo";

Modal.setAppElement("#root");

function App() {

  const [game, setGame] = useState(new Chess());
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const gameRef = useRef(game);

  // Function to switch turns between players
  const switchTurn = () => {
    setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
  };

  // Function to handle a player's move on the chessboard
  const handleMove = (source, target) => {
    let move = null;

    setGame((g) => {
      const newGame = { ...g };
      move = newGame.move({
        from: source,
        to: target,
        promotion: "q",
      });
      return newGame;
    });

    // Clear possible moves after a move
    setPossibleMoves([]);

    // Check if the move is legal
    if (move === null) {
      toast.error("Illegal move! Try again.", {
        autoClose: 1000,
      });
      return;
    }

    // Checking if the game is over (checkmate or stalemate)
    if (gameRef.current.game_over()) {
      toast.success(`Player ${currentPlayer} wins!`, {
        autoClose: 3000,
      });
      return;
    }

    // Switching turns after a valid move
    switchTurn();
  };

  // Function to handle dropping a piece on the board
  const onDrop = (source, target) => {
    // Checking if the piece being moved belongs to the current player
    const piece = gameRef.current.get(source);
    const isWhiteMove = piece && piece.color === "w";

    if (
      (currentPlayer === 1 && !isWhiteMove) ||
      (currentPlayer === 2 && isWhiteMove)
    ) {
      toast.info("It's not your turn!", {
        autoClose: 1000,
      });
      return;
    }

    // Handle the move if it's the correct player's turn
    handleMove(source, target);
  };

  // Function to handle clicking on a chess piece
  const onPieceClick = (square) => {
    // Get possible moves for the clicked piece
    const moves = gameRef.current.moves({ square, verbose: true });
    setPossibleMoves(moves.map((move) => move.to));
  };

  // Function to open the quit confirmation modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the quit confirmation modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle quitting the game
  const handleQuit = () => {
    toast.warn(
      `Player ${currentPlayer} quits. Player ${
        currentPlayer === 1 ? 2 : 1
      } wins!`,
      {
        autoClose: 3000,
      }
    );
    closeModal();
  };

  // Function to restart the game
  const restartGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    setCurrentPlayer(1); // Reset to player 1
    gameRef.current = newGame;
    setPossibleMoves([]); // Clear possible moves
    toast.success("Game restarted. Player 1 starts!", {
      autoClose: 3000,
    });
  };

  // Function to handle hovering over a chess piece
  const onPieceHover = (square) => {
    // Get possible moves for the hovered piece
    const moves = gameRef.current.moves({ square, verbose: true });
    setPossibleMoves(moves.map((move) => move.to));
  };

  // Function to handle leaving a chess piece
  const onPieceLeave = () => {
    setPossibleMoves([]);
  };

  return (
    <div className="app">
      <div className="board-container">
        <ChessboardComponent
          game={game}
          onPieceDrop={onDrop}
          onPieceClick={onPieceClick}
          possibleMoves={possibleMoves}
          onPieceHover={onPieceHover}
          onPieceLeave={onPieceLeave}
        />
      </div>

      <GameInfo
        currentPlayer={currentPlayer}
        openModal={openModal}
        restartGame={restartGame}
      />

      <ToastContainer />

     
      <QuitModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        handleQuit={handleQuit}
        currentPlayer={currentPlayer}
      />
    </div>
  );
}

export default App;
