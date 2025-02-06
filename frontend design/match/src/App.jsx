import "./App.css";
import GameCard from "./components/GameCard/GameCard";
import { useState } from "react";

const GameCards = Array.from({ length: 16 }, (_, i) =>
  String.fromCharCode(`A`.charCodeAt(0) + i / 2)
).map((item, idx) => ({
  id: idx,
  content: item,
}));

function App() {
  const [currentOpenCard, setCurrentOpenCard] = useState();
  const [matchedCards, setMatchedCards] = useState([]);
  const handleCardClick = (cardItem) => {
    if (!currentOpenCard) {
      setCurrentOpenCard(cardItem);
      return;
    } else {
      if (
        currentOpenCard.content === cardItem.content &&
        currentOpenCard.id !== cardItem.id
      ) {
        // match
        setMatchedCards([...matchedCards, currentOpenCard, cardItem]);
      }
      setCurrentOpenCard();
    }
  };

  return (
    <>
      <div className="board">
        {GameCards.map((card) => {
          const isCurrentOpen = currentOpenCard?.id === card.id;
          const isMatched = matchedCards.some(
            (matchedCard) => matchedCard.id === card.id
          );
          const isOpen = isCurrentOpen || isMatched;
          return (
            <div className="card-box" key={card.id}>
              <GameCard
                open={isOpen}
                content={card.content}
                onClick={() => {
                  if (!isOpen) handleCardClick(card);
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
