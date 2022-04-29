import './App.css';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Todo from './Todo';
import FormTodo from './FormTodo';

const App = () => {
  // Sets state for new array that will hold todo items
  const [todos, setTodos] = useState([
    {
      text: "This is a sample todo",
      completed: false
    }
  ])

  // Function for adding new todo items
  const addTodo = text => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }

  // Function for removing todo items
  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  // Function for marking todos as done
  const markTodo = index => {
    const newTodos = [...todos]
    newTodos[index].completed = true
    setTodos(newTodos)
  }

  // Function for un-marking todos as done
  const unMarkTodo = index => {
    const newTodos = [...todos]
    newTodos[index].completed = false
    setTodos(newTodos)
  }
  
  // Renders two components in the UI - <FormTodo /> and <Todo />
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
            <Card.Body>
              <Todo 
                key={index} 
                index={index} 
                todo={todo} 
                markTodo={markTodo} 
                unMarkTodo={unMarkTodo} 
                removeTodo={removeTodo}
              />
             </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
