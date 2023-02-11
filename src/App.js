import React, { useState } from "react";
import "./App.css";

function App () {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const incrementCount = () => {
    setCount(count + increment) //former useState + increased increment
  }

    return (
      <main>
        {/* <p>React State Lab</p> */}
        <p>Current Score: {count}</p>
        <button onClick={incrementCount}>+{increment}</button>
        <br></br>
      </main>
    );
}

export default App;
