import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  

  return (
    <div style={{backgroundColor:color}} className='main'>
      <div className='bgc' >
        <div className='btns'>
            <button className='btn' id='red' onClick={()=> setColor("red")}>Red</button>
            <button className='btn' id='green' onClick={()=> setColor("green")}>Green</button>
            <button className='btn' id='blue' onClick={()=> setColor("blue")}>Blue</button>
        </div>
      </div>
      </div>
  )
}

export default App
