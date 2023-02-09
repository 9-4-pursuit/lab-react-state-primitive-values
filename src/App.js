import React, { useState } from 'react'
import './App.css'

function App() {
  const [points, setPoints] = useState(0)
  const [win, setWin] = useState(false)
  const [multiplier, setMultiplier] = useState(1)
  const increment = () => {
    setPoints(points + multiplier)
    if (points+multiplier >= 100) {
      setWin(!win)
    }
  }
  const upgrade = () => {
    if (points < 10) {
      alert("You can't afford that!")
    } else {
      setMultiplier(multiplier + 1)
      setPoints(points - 10)
    }
  }
  const reset=()=>{
    setWin(!win)
    setPoints(0)
    setMultiplier(1)
  }
  return (
    <main>
      {win ? (
        <>
          <h2>You Win!</h2>
          <p>{points}</p>
          <button onClick={reset}>Play again?</button>
        </>
      ) : (
        <>
          <p>Current Score: {points} </p>
          <button onClick={increment}>+{multiplier}</button>
          <button onClick={upgrade}>
            Pay 10 points to change from +{multiplier} to +{multiplier+1}
          </button>
        </>
      )}
    </main>
  )
}

export default App
