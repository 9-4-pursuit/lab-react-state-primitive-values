import React from "react";
import { useState } from "react";
//import  Switch from './Switch.js';
import "./App.css";


//useState hook is imported to make & manage state variables. Two states are defined with the hook, score and point. 


function App() {
  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(1);
  const displayalert = "You can't afford that!";
  //const [value, setValue] = useState(false)
  const [visible, setVisible] = useState(true); //visibility state
 
 //this has "visible" as never being used but I used it right below. Why is that?
 
 
  const handleToggle = () => {
    setVisible((current) => !current);
  };

 
  
  function updateScore() {
    setScore(score + point);
    console.log("Score is being updated to ", score);

  }

/* function levelUp(score){}
      //change button to add a point to the number of points displayed that are going up
      //change incrementing score by one
      //change pay ten points button */

  function levelUp(score) {
    console.log(score);
    if (score > 99) {setVisible(false)};
    if (score < 10) {
      alert(displayalert);
    } else {
      setScore(score - 10);
      setPoint(point + 1);
    }
  }


  const startOver = () => {
    setScore(0);
    setPoint(1);
  }



  return (
    <main>
      <p>React State Lab</p>

      <div className="App">

        <h1>Current Score: {score}</h1>

        <button id="pointValue" onClick={() => updateScore()}>+{point}</button>
        <br></br>
        <button id="payButton" onClick={() => levelUp(score)}>
          Pay 10 points to change from +{point} to +{point+1}
        </button>
        <h2 id="youWin" className={score>99 ? "visible" : "hidden"}>You Win!</h2>
        <button onClick={startOver} id="playAgain" className={score>99 ? "visible" : "hidden"}>Play again?</button>


      </div>
    </main>
  );
}

export default App;
