import { useState } from "react";
import { Button, Form } from 'react-bootstrap'

const FormTodo = props => {
    // Sets the state that will hold the value the user types into the input field
    const [value, setValue] = useState("")

    // Extracts the addTodo function from the props within the parent <App /> component
    const { addTodo } = props

    // Handles the function of the Submit Button for when the user clicks it
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) {
            return alert("Please enter some text!")
        };
        addTodo(value);
        setValue("");
      }

    // Renders the UI for the input for adding a new Todo Item and the Submit Button
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><strong>Add Todo</strong></Form.Label>
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
            </Form.Group>
            <br/>
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
       </Form>
    )
}

export default FormTodo