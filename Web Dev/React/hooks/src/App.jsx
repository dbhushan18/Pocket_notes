import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);


  let addValue = ()=>{
    setCounter(counter+1);
    // console.log(counter);
  }

  let removeValue = ()=>{
    if(counter>0)
      setCounter(counter-1);
    
    // console.log(counter);
  }

  return (
    <>
      <h1>counter</h1>
      <h1>{counter}</h1>
      <button
      onClick={addValue} 
      >inc</button>
      <button onClick={removeValue}>dec</button>
    </>
  )
}

export default App
