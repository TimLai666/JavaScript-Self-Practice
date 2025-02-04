import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const createTodoItem = () => {
    setTodoItems([name, ...todoItems]);
  };

  return (
    <>
      <h1 className="title">Todo</h1>
      <hr />
      <div className="input-form">
        <input
          type="text"
          placeholder="待辦事項"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={createTodoItem}>新增</button>
      </div>
      {todoItems.map((item) => {
        return <div className="todo-item" key={item}>{item}</div>;
      })}
    </>
  );
}

export default App;
