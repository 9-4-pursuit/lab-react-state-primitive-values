import React from "react";
import { useState } from 'react';
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(1);

  function updateScore() {
    setScore(score + point);
  };

  function updatePoint() {
    if(score < 10) {
      alert("You can't afford that!");
    } else if(score >= 10) {
      setPoint(point + 1);
      setScore(score - 10);
    } 
  }

  function playAgain() {
    setScore(0);
    setPoint(1);
  }

  return (
    <div className="App">
      { score < 100 ? (
        <div className="play">
          <h1>Current Score: {score}</h1>
          <button onClick={updateScore}>+{point}</button>
          <br></br>
          <button onClick={updatePoint}>Pay 10 points to change from +{point} to +{point+1}</button>  
        </div>
      ) : (
        <div className="won">
          <h2>You Win!</h2>
          <button onClick={playAgain}>Play again?</button>
        </div>
      ) }
    </div>
  )
}

export default App;
