import React from "react";
import { useState } from 'react';
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(1);
  const [visible, setVisible] = useState(true);

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
    setVisible(!visible);
  }

  if(visible) {
    return(
      <div className="App">
        <h1>Current Score: {score}</h1>
        <div className="play" style={{visibility: "visible"}}>
          <button onClick={score < 100 ? updateScore : setVisible(!visible)}>+{point}</button>
          <br></br>
          <button onClick={updatePoint}>Pay 10 points to change from +{point} to +{point+1}</button>  
        </div>
      </div>
    )
  } else {
    return(
      <div className="App">
        <div className="won" style={{visibility: "visible"}}>
          <h2>You Win!</h2>
          <button onClick={playAgain}>Play again?</button>
        </div>
      </div>
    )
  }
}

export default App;
