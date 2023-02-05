import { useState } from "react";
import React from "react";
import "./App.css";

function App() {

  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(1);
  const [toggleWin, setToggleWin] = useState(false);

  function scoreUp() {
    setScore(score + number)
    if (score >= 100) {
      setToggleWin(true)
    }
  }
  function numberUp() {
    if (score > 9) {
      setScore(score - 10);
      setNumber(number + 1)
    } else {
      alert(`You can't afford that!`)
    }
  }

  function playAgain() {
    setScore(0);
    setNumber(1);
    setToggleWin(false);
  }

  return (
    <main>
      <h1>Current Score: {score}</h1>
      <br />
      <button onClick={scoreUp} style={toggleWin ? { display: 'none' } : { display: 'block' }}>+{number}</button>
      <button onClick={numberUp} style={toggleWin ? { display: 'none' } : { display: 'block' }}>Pay 10 points to change from +{number} to +{number + 1}</button>
      <h2 style={toggleWin ? { display: 'block' } : { display: 'none' }}>You Win!</h2>
      <button onClick={playAgain} style={toggleWin ? { display: 'block' } : { display: 'none' }}>Play again?</button>
    </main>
  );
}

export default App;
