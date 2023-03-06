import React from "react";
import { useState } from "react";
import "./App.css";

function App () {

  const [counter, setCounter] = useState(0);

  const [points, setPoints] =useState(1);

  const [winner, setWinner] = useState(true)
  
  function addPoints() {
    setCounter(counter + points)
    if(counter >= 100) {
      setWinner(!winner)
    }
  }

  function payTen() {
    if(counter >= 10){
      setCounter(counter - 10);
      setPoints(points + 1)
    } else {
      alert("You can't afford that!")
    }
  }

    function playAgain(){
    setCounter(0);
    setPoints(1);
    setWinner(true);
  }


    return (
      <div className="App">
        {
          counter < 100 ? (
        <div>
        <h1>Current Score: {counter}</h1>
        <button onClick={addPoints}>+{points}</button>
        <button onClick={payTen}>Pay 10 points to change from +{points} to +{points + 1}</button>
        </div>
        
          ) : (
            <div>
        <h2>YOU WIN!</h2>
        <button style={winner ? {display: 'flex'} : {display: 'none'}} onClick={playAgain}>Play again?</button>
          </div>
          )
        }
        </div>
    )
}

export default App;


















