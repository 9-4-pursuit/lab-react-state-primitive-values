import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(0)
  const [number, setNumber] = useState(1)
  const [defaultStatus, toggleStatus] = useState(false)



  function changeNumber() {
    if (current >= 10) {
      setCurrent(current - 10)
      setNumber(number + 1)
    } else {
      alert(`You can't afford that!`)
    }
  }

  function increaseCurrent() {
    setCurrent(current + number)
    if (current >= 100) {
      toggleStatus(!defaultStatus)
    }
  }


  function playAgain() {
    setCurrent(0)
    setNumber(1)
    toggleStatus(false)
  }

  return (
    <main>
      <h1>Current Score: {current}</h1>
      <button style={defaultStatus ? { display: "none" } : { display: "block" }} value={number} onClick={increaseCurrent}>+{number}</button>
      <button style={defaultStatus ? { display: "none" } : { display: "block" }} onClick={changeNumber}>Pay 10 points to change from +{number} to +{number + 1}</button>
      <h2 style={defaultStatus ? { display: "block" } : { display: "none" }}>You Win!</h2>
      <button onClick={playAgain} style={defaultStatus ? { display: "block" } : { display: "none" }}>Play again?</button>
    </main>
  );
}

export default App;
