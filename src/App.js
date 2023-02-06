import React from "react";
import { useState } from "react";
import "./App.css";

function App () {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1)
  
  function changeScore() {
    setScore(score + increment)
   }

  function changeIncrements() {
    if(score < 10) {
     window.alert(`You can't afford that!`)
   } else {
     setIncrement(increment + 1)
     setScore(score - 10)
    }
   }

   function resetCounter() {
       setIncrement(1)
       setScore(0);
     } 
   
  
 if(score < 100){
  return (
    
     <main>
       <h2>Current Score: {score}</h2>
       <button onClick={changeScore}>+{increment}</button>
       <button onClick={changeIncrements}>Pay 10 points to change from +{increment} to +{increment + 1}</button>
     </main>
     )
  
   } else {
      return (
     <main>
       <div>
         <h2>You Win!</h2>
         <button onClick={resetCounter}>Play again?</button>
       </div>
     </main>
   )
  }
   
}

export default App;