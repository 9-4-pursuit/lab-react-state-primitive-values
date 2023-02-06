import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [currentScore, setNewScore] = useState(0);
  const [number, setNumber] = useState(1);

  function gameOver () {
    setNewScore(0);
    setNumber(1)
  
  }

  function addNumber() {
   if(currentScore <= 10){
    alert("You can't afford that!")
   } else {
      setNumber(number + 1);
      setNewScore(currentScore - 10)
   }
  }

  function addScore() {
    if (currentScore >= 100) {

    }

    setNewScore(currentScore + number);
  }

  return currentScore > 100 ? (
    <main>
      <div>
        <h1>You Win! {currentScore} </h1>
     <button type='submit' onClick={gameOver}>Play again?</button>
      </div>
    </main>
  ) : (

    <main>
      <div>
        <h1>Current Score: {currentScore} </h1>
        <button onClick={addScore}>+{number}</button>
        <button onClick={addNumber}>
          Pay 10 points to change from +{number} to +{number + 1}
        </button>
      </div>
    </main>

  ) 
}

export default App;
