import "./GameCard.css";

function GameCard(props) {
  const { content, open, onClick } = props;
  return (
    <div className={`game-card ${open ? "open" : ""}`} onClick={onClick}>
      {open ? (
        <div className="front">{content}</div>
      ) : (
        <div className="back"></div>
      )}
    </div>
  );
}

export default GameCard;
