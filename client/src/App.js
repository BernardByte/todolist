
// import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Form from './components/form';
import Header from './components/header';
// import axios from 'axios'
//components

function App() {
  // const [formData,setForm] = useState({})

  // const handleForm =  (e)=>{
  //   console.log(e.target.name,e.target.value);
  //   setForm({
  //     ...formData,
  //     [e.target.name]:e.target.value
  // })
  // }

  // const submitForm = async (e)=>{
  //   e.preventDefault()
  //   const response = await fetch('http://localhost:4000/todo',{
  //     method:'POST',
  //     body:JSON.stringify(formData),
  //     headers:{
  //       'Content-Type':'application/json'
  //     }
  //   })
  //   const data = await response.json()
  //   console.log(data);
  //   e.target.reset();
  // }
  
  return (
    <>
    <Header />
    <Form />
    {/* <form onSubmit={submitForm}>
      <p>{JSON.stringify(formData)}</p>
      <input type="text" name='username' placeholder='Enter user name' onChange={handleForm} />
      <input type="password" name='Password' placeholder='Passwrod' onChange={handleForm} />
      <input type="submit" value="submit" />
    </form> */}
    </>
  );
}

export default App;
