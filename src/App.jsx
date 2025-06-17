import { useEffect, useState } from "react";
import StartGame from "./components/StartGame";
import MemoryCard from "./components/MemoryCard";
import GameBoard from "./components/GameBoard";
import ResetGame from "./components/ResetGame";
import "./App.css";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojiCards, setEmojiCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, selectMaxScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (selectedCards.length !== 0) {
      const emojiArray = getEmojisArray(emojiCards);

      setEmojiCards(emojiArray);
    }
  }, [selectedCards.length]);

  async function startGame() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=16"
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

  function getEmojisArray(cardData) {
    const randomIndices = getRandomIndices(cardData);

    const emojisArray = randomIndices.map((index) => cardData[index]);

    return emojisArray;
  }

  function getRandomIndices(cardData) {
    const randomIndices = [];

    for (let i = 0; i < cardData.length; i++) {
      const random = Math.floor(Math.random() * cardData.length);

      if (!randomIndices.includes(random)) randomIndices.push(random);
      else i--;
    }

    return randomIndices;
  }

  function getSelectedCards(emojiName) {
    if (selectedCards.includes(emojiName)) {
      setSelectedCards([]);

      score > maxScore && selectMaxScore(score);

      setIsGameOn(false);
      setIsGameOver(true);
    } else {
      const newSelectedCards = [...selectedCards, emojiName];

      if (newSelectedCards.length === 16) {
        setSelectedCards([]);

        setScore((prevScore) => prevScore + 1);

        score + 1 > maxScore && selectMaxScore(score + 1);

        setIsGameOn(false);
        setIsGameOver(true);
      } else {
        setSelectedCards(newSelectedCards);

        setScore((prevScore) => prevScore + 1);
      }
    }
  }

  function resetGame() {
    setScore(0);
    setIsGameOn(true);
    setIsGameOver(false);
  }

  return (
    <>
      <h1>Memory Card</h1>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      {!isGameOn && !isGameOver && <StartGame handleClick={startGame} />}
      {isGameOn && !isGameOver && (
        <MemoryCard cards={emojiCards} handleClick={getSelectedCards} />
      )}
      {isGameOn && <GameBoard currentScore={score} bestScore={maxScore} />}
      {isGameOver && <ResetGame currentScore={score} handleClick={resetGame} />}
    </>
  );
}

export default App;
