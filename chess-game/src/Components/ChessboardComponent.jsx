import React from "react";
import { Chessboard } from "react-chessboard";

const ChessboardComponent = ({
  game,
  onPieceDrop,
  onPieceClick,
  possibleMoves,
  onPieceHover,
  onPieceLeave,
}) => {
//   const gameRef = useRef(game);

  return (
    <Chessboard
      position={game.fen()}
      onPieceDrop={onPieceDrop}
      onPieceClick={onPieceClick}
      customBoardStyle={{
        borderRadius: "10px",
      }}
      customSquareStyles={possibleMoves.reduce((acc, move) => {
        acc[move] = {
          background:
            "radial-gradient(circle, rgba(0,0,0,0.4) 20%, transparent 20%)",
          borderRadius: "50%",
        };
        return acc;
      }, {})}
      onMouseOverSquare={onPieceHover}
      onMouseOutSquare={onPieceLeave}
    />
  );
};

export default ChessboardComponent;
