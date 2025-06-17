function GameBoard({ currentScore, bestScore }) {
  return (
    <div className="dash-board">
      <h1>Score: {currentScore}</h1>
      <h1>Best Score: {bestScore}</h1>
    </div>
  );
}

export default GameBoard;
