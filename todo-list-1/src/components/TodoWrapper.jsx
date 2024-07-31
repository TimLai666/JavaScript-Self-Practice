import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    { content: "吃飯", id: Math.random() },
    { content: "睡覺", id: Math.random() },
  ]);

  const addTodo = (content) => {
    setTodos([...todos, { content, id: Math.random() }]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return <Todo todo={todo} deleteTodo={deleteTodo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoWrapper;
