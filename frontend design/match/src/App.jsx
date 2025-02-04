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
  const [openCards, setOpenCards] = useState([]);
  const handleCardClick = (id, Open) => {
    if (Open) {
      if (openCards.length >= 2) {
        setOpenCards([id]);
        return;
      }
      setOpenCards([...openCards, id]);
    } else {
      setOpenCards(openCards.filter((cardId) => cardId !== id));
    }
  };

  return (
    <>
      <div className="board">
        {GameCards.map((card) => {
          const isOpen = openCards.includes(card.id);
          return (
            <div className="card-box" key={card.id}>
              <GameCard
                open={isOpen}
                content={card.content}
                onClick={() => handleCardClick(card.id, !isOpen)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
