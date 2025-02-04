import './GameCard.css';

function GameCard(props) {
  const {content, open, onClick} = props;
  if (!open) return (
    <div className="game-card" onClick={onClick}>
      {/* {content} */}
    </div>
  );
  return (
    <div className="game-card" onClick={onClick}>
      {content}
    </div>
  )
}

export default GameCard;
