import { useState } from 'react'

import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes , setJoke] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
  .then((response) =>{
    console.log("Response:", response);
    console.log("Data:", response.data);
    setJoke(response.data);
  })
  .catch((error)=>{
    console.error('Error fetching jokes:',error);
  });
  },[])
  return (
   <>
   <h1>Full Stack Basic</h1>
   <p>Jokes : {jokes.length}  </p>

   {jokes.map((joke)=>(
    <div key = {joke.id}>
      <h3>{joke.title}</h3>
      <p>{joke.content}</p>
    </div>
  ))}
   </>
  )
}

export default App
