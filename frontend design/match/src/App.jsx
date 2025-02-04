import "./App.css";

function App() {
  const GameCards = Array.from({ length: 16 }, (_, i) =>
    String.fromCharCode(`A`.charCodeAt(0) + i/2)
  );
  return (
    <>
      <div className="board">
        {GameCards.map((card, idx) => (
          <div className="card-box">
            <div key={idx} className="game-card">
              {card}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
