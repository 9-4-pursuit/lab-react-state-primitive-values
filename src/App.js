import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(1);
  const [toggleWin, setToggleWin] = useState(false);

  function scoreUp() {
    setScore(score + number);
    if (score > 100) {
      setToggleWin(!toggleWin);
    }
  }

  function numberUp() {
    if (score > 9) {
      setScore(score - 10);
      setNumber(number + 1);
    } else {
      alert("You can't afford that!");
    }
  }

  function playAgain() {
    setScore(0);
    setNumber(1);
    setToggleWin(false);
  }

  return (
    <main>
      <h1 onClick={scoreUp}>Current Score: {score}</h1>
      <button
        style={toggleWin ? { display: "none" } : { display: "block" }}
        onClick={scoreUp}
        value={number}
      >
        +{number}
      </button>
      {/* must throw an Alert if value is less than 10 points */}
      <button
        style={toggleWin ? { display: "none" } : { display: "block" }}
        onClick={numberUp}
      >
        Pay 10 points to change from +{number} to {number + 1}
      </button>
      <h2 style={toggleWin ? { display: "block" } : { display: "none" }}>
        You Win
      </h2>
      <button
        style={toggleWin ? { display: "block" } : { display: "none" }}
        onClick={playAgain}
      >
        Play again?
      </button>
    </main>
  );
}

export default App;
