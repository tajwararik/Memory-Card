import { useState } from "react";
import StartGame from "./components/StartGame";
import "./App.css";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);

  function startGame() {
    setIsGameOn(true);
  }

  return (
    <>
      <h1>Memory Card</h1>
      {!isGameOn && <StartGame handleClick={startGame} />}
    </>
  );
}

export default App;
