import React from "react";
import "./App.css";
import { useState } from "react";

function App () {

const [currentScore, setNewScore] = useState(0)
const [number, setNewNumber] = useState(1)

function addScore(){
  setNewScore(currentScore + number)
}

function buyPoints() {
  if (currentScore >= 10) {
      setNewNumber(number+1);
      setNewScore(currentScore - 10);
  } else { 
      alert("You can't afford that!")
  }
}

function playAgain(){
  setNewScore(0);
  setNewNumber(1);
}


if (currentScore >= 100) {
  return (
    <main>
    <div>
      <h1>{currentScore}</h1>
    <h1>You Win!</h1>
    <button onClick={playAgain}>Play again?</button>
    </div>
    </main>
  )
} else {

    return (
      <main>
        <div>
        <h1>Current Score: {currentScore}</h1>
        <button onClick={addScore}>+{number}</button>
        <button onClick={buyPoints}>Pay 10 points to change from +{number} to +{number + 1}</button>
        </div>
      </main>
    );
}
}

export default App;
