// form css
import { useState } from 'react'
import './form.css'

//form component
const Form = () => {
  const [text, setText] = useState({})
  // const [todoText,setTodoText]= useState('')
   

  const handleForm = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:4000/todo', {
      method: 'POST',
      body: JSON.stringify(text),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log('data sent to server', text)
    const data = await response.json()
    console.log('server data: ', data);
    event.target.reset();

  }

  const onInput = (event) => {
    //  console.log(event)
    //  setText(event.target.value)
    console.log(text.todoText);
    setText({ todoText: event.target.value })
  }
  
  return (
    <form className="todo-form" onSubmit={handleForm}>
      <input type="text" placeholder="Enter a todo..." name='todoText' required onChange={onInput} />
      {/* <input type="submit" value='submit' /> */}
      {/* <p>Entered value: {text.todoText}</p> */}
    </form>
  )
}

export default Form