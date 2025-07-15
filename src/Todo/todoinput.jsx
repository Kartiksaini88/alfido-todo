import React, { useState } from 'react'
import './todo.css'
export default function Todoinput({getTodos}) {
    const [todo, setTodo] = useState("");

    const handleInputChange = (e) => {
        setTodo(e.target.value);
    };

  return (
    <div>
      <div className="todo-container">
      <h2>To-Do App</h2>
      
      <input
        type="text"
        value={todo!== null ? todo : ""}
        placeholder="Enter task name"
        onChange={handleInputChange}
      />

      <div className="buttons">
        <button onClick={()=>{
            getTodos(todo)
        }}
        disabled={todo === "" ? true : false}
        >Add</button>
      </div>
    </div>
    </div>
  )
}
