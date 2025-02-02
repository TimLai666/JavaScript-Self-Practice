import './App.css'

function App() {
  return (
    <>
      <h1 className="title">Todo</h1>
      <hr />
      <div className="input-form">
        <input type="text" placeholder="待辦事項" />
        <button>新增</button>
      </div>
      <div className="todo-item">
        去買東西
      </div>
    </>
  )
}

export default App
