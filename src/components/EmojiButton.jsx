import { useEffect, useState } from "react";
import "../styles/style.css";

function EmojiButton({ emojiData, handleClick }) {
  const [emojiURL, setEmojiURL] = useState("");

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(emojiData.url);
        const data = await response.json();

        setEmojiURL(data.sprites.front_default);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPokemon();
  }, [emojiData.url]);

  return (
    <div className="emoji-button" onClick={() => handleClick(emojiData.name)}>
      <div className="image-container">
        {emojiURL && <img src={emojiURL} alt={emojiData.name} />}
      </div>
      <p>{emojiData.name}</p>
    </div>
  );
}

export default EmojiButton;
