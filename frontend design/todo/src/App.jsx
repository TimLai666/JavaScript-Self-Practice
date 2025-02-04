import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [who, setWho] = useState("");
  const [date, setDate] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const createTodoItem = () => {
    setTodoItems([{ name, who, date }, ...todoItems]);
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
        <input
          type="text"
          placeholder="執行者"
          value={who}
          onChange={(e) => setWho(e.target.value)}
        />
        <input
          type="date"
          placeholder="日期"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={createTodoItem}>新增</button>
      </div>
      {todoItems.map((item) => {
        return (
          <div className="todo-item" key={item}>
            <div>
              <div>
                {item.name} - {item.date}
              </div>
              <div className="user">{item.who}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
