import React, { useState } from "react";
import "./App.css";

function App () {

const [counter, setCounter] = useState(0)
const [value, setValue] = useState(1)

function scorePlus() {
  setCounter(counter + value)
}

function paySystem() {
  if(counter < 10) {
    alert("You can't afford that!")
  } else {
    setCounter(counter - 10)
    setValue(value + 1)
  }
}

function resetGame() {
  setCounter (0)
  setValue (1)
}

    return (
      <main>
        {
        counter >= 100 ? (
        <>
        <center><h1>Current Score: {counter}</h1></center>
        <center><button onClick={paySystem}>Pay 10 points to change from +{value} to +{value +1}</button></center>
        <center><h1>You Win!</h1></center>
        <center><button onClick={resetGame}>Play again?</button></center>
        </>
        ) : (
          <>
        <center><h1>Current Score: {counter}</h1></center>
        <center><button onClick={scorePlus}>+{value}</button></center>
        <br></br>
        <center><button onClick={paySystem}>Pay 10 points to change from +{value} to +{value +1}</button></center>
          </>
        )
        }
      </main>
    );
}

export default App;

