import { useState } from "react";
import StartGame from "./components/StartGame";
import MemoryCard from "./components/MemoryCard";
import "./App.css";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojiCards, setEmojiCards] = useState([]);

  async function startGame() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );

      if (!response.ok) console.log("Could not fetched");

      const data = await response.json();
      const cardData = data.results;
      const emojisArray = getEmojisArray(cardData);

      setIsGameOn(true);
      setEmojiCards(emojisArray);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Memory Card</h1>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      {!isGameOn && <StartGame handleClick={startGame} />}
      {isGameOn && <MemoryCard cards={emojiCards} />}
    </>
  );
}

export default App;
