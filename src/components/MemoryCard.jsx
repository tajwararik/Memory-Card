import EmojiButton from "./EmojiButton";

function MemoryCard({ cards, handleClick }) {
  const card = cards.map((emoji, index) => {
    return (
      <li key={index} className="cards">
        <EmojiButton emojiData={emoji} handleClick={handleClick} />
      </li>
    );
  });

  return <ul className="card-container">{card}</ul>;
}

export default MemoryCard;
