import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [currentScore, setNewScore] = useState(0);
  const [number, setNumber] = useState(1);

  // function gameOver () {
    
  //   if (currentScore > 100) {

  //   }
      
    
  // }

  function addNumber() {
   if(currentScore < 10){
    alert("You can't afford that")
   } else {
      setNumber(number + 1)
   }
  }

  function addScore() {
    setNewScore(currentScore + number);
  }

  return (
    <main>
      <div>
        <h1>Current Score: {currentScore} </h1>
        <button onClick={addScore}>+{number}</button>
        <button onClick={addNumber}>
          Pay 10 points to change from +{number} to +{number + 1}
        </button>
      </div>
    </main>
  );
}

export default App;
