import { useState } from "react";
import React from "react";
import "./App.css";

function App () {

  const [counter, setCounter] = useState(0);
  const [i, setIndex] = useState(1)

  function increaseCounter() {
    setCounter(counter + i)
   
  }

  function payPoints(){
    setIndex(i+1)
    setCounter(counter - 10)
  }

  function levelUp(){
    if(counter <10){
      alert ("You can't afford that!")
    }
    else if(counter >=10){
    payPoints(setCounter)
    }
  }



 function game(){
  return (
  <main>
  <h1>Current Score: {counter}</h1>
  <button onClick ={increaseCounter}>+{i}</button>
  <button onClick={levelUp}>Pay 10 points to change from +{i} to +{i+1}</button>
</main>)
 }
 function playAgain(){
   setCounter(0);
   setIndex(1);

}

      if(counter >= 100) {
        return (
            <main>
                <h1>You Win!</h1>
                <button onClick={playAgain}>Play again?</button>
            </main>
        )
      }
      else {
        return (
          game()
      
    )}  
}

export default App;
