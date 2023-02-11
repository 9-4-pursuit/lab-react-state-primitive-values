import React, { createElement } from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(1);
  const [visible, setVisible] = useState(true);
  const displayalert = "You can't afford that!";
  


  
  function updateScore() {
    setScore(score + point);
    console.log("Score is being updated to ", score);
    if (score >= 100) {winning()}
  }

  function levelUp(score) {
    console.log(score);
    if (score < 10) {
      alert(displayalert);
    } else {
      setScore(score - 10);
      //change button to add a point to the number of points displayed that are going up
      //change incrementing score by one
      //change pay ten points button
      setPoint(point + 1);
    }
  }

  function winning(){
    const won = document.createElement("h2");
    won.innerHTML="You Win!"
    document.h1.after(won)
    const againButton = document.createElement("button")
    againButton.innerHTML = "Play again?"
  }

  // - When the user has `100` or more points, display a victory screen
  // - There should be an `<h2>` element with the _exact_ text `You Win!`
  // - There should be a button with the text `Play again?` (including the question mark)
  //   - Clicking on this button starts the game over again with a score of 0, a `+1` button, etc.
  // - Keep the user's score on the screen
  // - Do not show the buttons to add to the score or pay points.



  function startOver() {}



  return (
    <main>
      <p>React State Lab</p>
      <div className="App">
        <h1>Current Score: {score}</h1>
        <button id="pointValue" onClick={() => updateScore()}>+{point}</button>
        <button onClick={() => levelUp(score)}>
          Pay 10 points to change from +{point} to +{point+1}
        </button>


      </div>
    </main>
  );
}

export default App;
