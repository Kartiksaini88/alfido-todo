import React from 'react'
import './todolist.css'
export default function Todolist({ todos , deleteTodo , handleToggle, handleEdit , showForm, setShowForm }) {
   
    const [ editTitle, setEditTitle ] = React.useState("");
 
  return (
        <div className="todo-list-container">
      <h2>My Tasks</h2>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <h3>
              {todo.title}
              </h3>
                <h4 >
                {todo.status ? "Completed" : "Pending"}</h4>
            
            <div className="actions">
              <button onClick={()=>{
                setShowForm(!showForm);
              }}>Edit</button>
              <button onClick={()=>{
                deleteTodo(todo.id)
              }}>Delete</button>
              <button onClick={()=>{
                handleToggle(todo.id)
              }}>Toggle Status</button>
             
            </div>
             {showForm && (
            <div className="edit-form">
            <h3>Edit Task</h3>
            <input
                type="text"
                placeholder="Edit task name"
                onChange={(e) => setEditTitle(e.target.value)}
            />
            <button onClick={() => setShowForm(false)}>Close</button>
            <button onClick={() => handleEdit(todo.id , editTitle)}>Save</button>
            </div>
        )}
          </li>
          
        ))}
      </ul>
      
    </div>
  )
}
