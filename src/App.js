import React from "react";
import { useState } from 'react';
import "./App.css";

function App() {
  const [currentScore, setScore] = useState(0);
  const [currentMultiplier, setMultiplier] = useState(1);
  const [currentVisible, setVisible] = useState(true);
  // Changed so it isn't visibility that's toggled but whether it's rendered at all.

  // function increaseScore() {
  //   setScore(currentScore + currentMultiplier);
  //   if (currentScore === 100) {
  //     console.log(currentScore);
  //     setVisible(!currentVisible)
  //   }
  // }

  let hamster = currentVisible;

  function increaseScore() {
    separateScore();
    if (currentScore + currentMultiplier > 99) {
      // useState is async so variable updates after.  Adding currentMultiplier gets around it in a dirty way.  This doesn't account for what may happen when currentScore is decreased, for example.
      console.log(currentScore);
      //console.log shows async; currentScore at 105 (and currentMultiplier at 5) but console.log shows 100, for example
      setVisible(!currentVisible)
    }
  }

  function separateScore() {
    setScore(currentScore + currentMultiplier);
  }

  function upgradeMultiplier() {
    if (currentScore < 10) {
      alert("You can't afford that!")
    } else {
      setScore(currentScore - 10);
      setMultiplier(currentMultiplier + 1);
    }
  }

  function resetButton() {
    setVisible(!currentVisible);
    setScore(0);
    setMultiplier(1);
  }
  // return (
  //   <main>
  //     <h2>Current Score: {currentScore}</h2>
  //     <div><button style={{ visibility: currentVisible ? 'visible' : 'hidden' }} onClick={increaseScore}>+{currentMultiplier}</button></div>
  //     <div><button style={{ visibility: currentVisible ? 'visible' : 'hidden' }} onClick={upgradeMultiplier}>Pay 10 points to change from +{currentMultiplier} to +{currentMultiplier + 1}</button></div>
  //     <h2 style={{ visibility: !currentVisible ? 'visible' : 'hidden' }}>You Win!</h2>
  //     <button style={{ visibility: !currentVisible ? 'visible' : 'hidden' }} onClick={resetButton}>Play again?</button>
  //   </main>
  // );
  // Commented out original CSS styling code.
  if (!hamster) {
    return (
      <main>
        <h2>You Win!</h2>
        <button onClick={resetButton}>Play again?</button>
      </main>
    );
  } else {
    return (
      <main>
        <h2>Current Score: {currentScore}</h2>
        <div><button onClick={increaseScore}>+{currentMultiplier}</button></div>
        <div><button onClick={upgradeMultiplier}>Pay 10 points to change from +{currentMultiplier} to +{currentMultiplier + 1}</button></div>
      </main>
    );
  }
}

export default App;
