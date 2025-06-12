import "../styles/style.css";

function RegularButton({ handleClick, children }) {
  return <button onClick={handleClick}>{children}</button>;
}

export default RegularButton;
