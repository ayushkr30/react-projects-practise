import { useState } from "react"
import React  from 'react'
import "../style.css"


const generateID = () => {
    return Math.floor(Math.random()*10);
}


const Todos = () => {
    const [todos, SetTodos] = useState([]);
    const [input, SetInput] = useState("");

    const handleSubmit = () => {
       SetTodos((todos) => todos.concat({
        text: input, id: generateID(),
       }));
       SetInput("");
    }

    const removeTodo = (id) => {
        SetTodos((todos)=> todos.filter((t) => t.id !== id));
    }

  return (
    <div className="conatiner">
      <input type="text" value={input} onChange={(e)=> SetInput(e.target.value)} placeholder="New Todo" />
      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(({text, id}) => (
            <li key={id} className="todo">
                <span>{text}</span>
                <button className="close" onClick={()=> removeTodo(id)}>X</button>
                </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos