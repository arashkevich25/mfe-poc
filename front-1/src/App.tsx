import { useState } from 'react'
import './App.css'
import { Scopes } from './Scopes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Team A</h1>
      <h2>Based on React</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Scopes />
    </>
  )
}

export default App
