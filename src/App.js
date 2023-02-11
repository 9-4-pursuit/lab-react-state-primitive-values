import React, { useState } from "react";
import "./App.css";

function App () {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const incrementCount = () => {
    setCount(count + increment) //former useState + increased increment
  }

    const payTen = () => {
      if (count < 10) {
        alert("You can't afford that!");
        } else {
          setCount(count-10)
          setIncrement(increment + 1)
      }
    }

    function playAgain() {
      setCount(0);
      setIncrement(1);
    }

    if (count < 100) {
    return (
      <main>
        {/* <p>React State Lab</p> */}
        <p>
          <h2 id="score">Current Score: {count}
          </h2>
        </p>
        <button onClick={incrementCount}>+{increment}</button>
        <p>
        <button onClick = {payTen}>Pay 10 points to change from +{increment} to +{increment+1}</button>
        </p>
      </main>
    );
    } else {
      return (
        <main>
          {/* <p>
            Current Score: {count}
            </p> */}
          <h2>
            You Win!
            </h2>
            <p></p>
            <button onClick={playAgain}>Play again?</button>
        </main>
    );
  }
}

export default App;
