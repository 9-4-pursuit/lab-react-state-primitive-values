import React from "react";
import { useState } from "react";
import  Switch from './Switch.js';
import "./App.css";


function App() {
  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(1);
  const [visible, setVisible] = useState(true); //visibility state
  const displayalert = "You can't afford that!";
  const [value, setValue] = useState(false)
  const handleToggle = () => {
    setVisible((current) => !current);
  };



  //const removeElement = () => {setVisible  }
  
  //const showElement= () => setVisibile(true);
  //const hideElement= () => setVisibile(false);

  
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
    console.log("function winning")
    const won = document.querySelector("h2");
    won.innerHTML="You Win!"
    //document.h1.after(won)
    const againButton = document.createElement("button")
    againButton.innerHTML = "Play again?"
    //document.h2.append(againButton);
  }

  // - When the user has `100` or more points, display a victory screen

  // - There should be a button with the text `Play again?` (including the question mark)
  //   - Clicking on this button starts the game over again with a score of 0, a `+1` button, etc.
  // - Keep the user's score on the screen
  // - Do not show the buttons to add to the score or pay points.



  function startOver() {
    <button onClick={handleToggle} className="start-over"></button>
    
  }



  return (
    <main>
      <p>React State Lab</p>
      <div className="App">
        <h1>Current Score: {score}</h1>
        <button id="pointValue" onClick={() => updateScore()}>+{point}</button>
        <button onClick={() => levelUp(score)}>
          Pay 10 points to change from +{point} to +{point+1}
        </button>
        <h2 className="youWin" > </h2>
        <button onClick={handleToggle} className="start-over"></button>
        <Switch 
          isOn={value}
          handleToggle={() => setValue(!value)}
          />


      </div>
    </main>
  );
}

export default App;
