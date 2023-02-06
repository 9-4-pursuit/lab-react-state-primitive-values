import React, { useState } from 'react';
import "./App.css";
import ResetGame from './Components/ResetGame';
import StartGame from './Components/StartGame';

function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(1);

  function increment() {
    setCounter(counter + value);
  }

  function pay10Points() {
    if (counter < 10) {
      alert("You can't afford that!");
    } else {
      setCounter(counter - 10);
      setValue(value + 1);
    }
  }

  function resetGame() {
    setCounter(0);
    setValue(1);
  }


  return (
    <main>
      {
        counter < 100 ? (
          <>
            <StartGame value={value} counter={counter} increment={increment} pay10Points={pay10Points} />
          </>
        ) : (
          <>
          <ResetGame resetGame={resetGame} />
          </>
        )
        }
    </main>
  );
}

export default App;
