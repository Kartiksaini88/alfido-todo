import React, { use, useState } from "react";
import Todoinput from "./todoinput";
import axios from "axios";
import { nanoid } from "nanoid";
import Todolist from "./Todolist";

export default function Todo() {
  // This component serves as a container for the Todo input component
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);


  const getTodos = (data) => {
    let payload = {
      id: nanoid(4),
      title: data,
      status: false,
    };
    setTodos([...todos, payload]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((e) => e.id !== index));
  };

  const handleEdit = (index, newtitle) => {
     
    let newtodos = todos.map((todo) => {
      if (todo.id === index) {
        return { ...todo, title: newtitle };
      }
      return todo;
    });
    setTodos(newtodos);
  };

  const handleToggle = (index) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === index) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    );
  };


  return (
    <div>
      <Todoinput getTodos={getTodos}></Todoinput>

      <Todolist
        todos={todos}
        deleteTodo={deleteTodo}
        handleToggle={handleToggle}
        handleEdit={handleEdit}
        showForm={showForm}
        setShowForm={setShowForm}
      ></Todolist>
    </div>
  );
}
