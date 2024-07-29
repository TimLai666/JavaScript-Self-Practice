import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
  return (
    <div>
        <h1>counter</h1>
        <button onClick={()=>increment()}>+</button>
        <button onClick={()=>decrement()}>-</button>
        <h2>{count}</h2>
    </div>
  )
}

export default Counter