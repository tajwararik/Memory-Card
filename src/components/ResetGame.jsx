import RegularButton from "./RegularButton";

function ResetGame({ currentScore, handleClick }) {
  if (currentScore !== 16) {
    return (
      <>
        <p>Game Over! Your score is {currentScore}. Try Again?</p>
        <RegularButton handleClick={handleClick}>Reset Game</RegularButton>
      </>
    );
  } else {
    return (
      <>
        <p>You won!!! Play Again?</p>
        <RegularButton handleClick={handleClick}>Play Again</RegularButton>
      </>
    );
  }
}

export default ResetGame;
