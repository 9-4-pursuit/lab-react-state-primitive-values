import React from "react";
import "./App.css";

import "./index.css";
import { useState } from "react";


const App = () => {
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(1);

const scoreUp = () => {
    setScore((score) => score + number);
    }

const numberUp = () => {
    if (score >= 10) {
      setNumber((number) => number + 1);
      setScore((score) => score - 10);
    } else {
      alert("You can't afford that!");
    }
  };

const playAgain = () => {
    setScore(0);
    setNumber(1);
  };

  return (
    <main>
      {score < 100 ? (
        <div className="game">
      <h1>Current Score: {score}</h1>
      <button onClick={scoreUp}> +{number}
      </button>
      <button onClick={numberUp}>
        Pay 10 points to change from +{number} to +{number + 1}
      </button>
      </div>
      ) : null}

      {score >= 100 ? (
        <div className="won">
      <h2>You Win!</h2>
      <button type="submit" onClick={playAgain}>
        Play again?
      </button>
      </div>
      ) : null}
       </main>
  );
};

export default App;
