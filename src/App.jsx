import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>TODO Application...</h1>
      <p5>Add your Goals</p5>
    </div>
  )
}

export default App
