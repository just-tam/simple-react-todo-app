import { Button } from "react-bootstrap"

const Todo = props => {

// Extracts the properties from the parent <App />
const { todo, index, markTodo, unMarkTodo, removeTodo } = props

// Renders the UI for each individual Todo item for the text and tick/cross boxes
return (
    <div className="todo">
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => todo.completed ? unMarkTodo(index) : markTodo(index)}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
    </div>
)

}

export default Todo