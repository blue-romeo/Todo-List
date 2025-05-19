import React from 'react'
import { useState } from 'react'
import  './Todo.css'


const Todo = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = () => {
        setTodos((todos) => {

            return todos.concat({
                text: inputValue, 
                id: Math.floor(Math.random() * 10)
              })
              })

    }
    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id))
    }
  return (
    <div className='container'>
     
        <input 
        type='text' 
        value={inputValue}
        placeholder='Add a new todo' 
        onChange={
            (e) => 
            setInputValue(e.target.value)} />
        <button onClick={handleSubmit}>Add</button>
      

      <ul className='todo-list '>
        {todos.map(({text, id}) => (
          <li className='todo' key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Todo
