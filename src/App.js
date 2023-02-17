import React, {useState} from "react";
import "./App.css";
import resetGame from "./Components/resetGame";
import startGame from "./Components/startGame";

function App () {

  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState(1)
    
  function scorePlus() {
    setCounter(counter + value)

  }

  function paySystem() {

    if(counter < 10) {
      alert('You cant afford that!')
    }else {
      setCounter(counter - 10)
      setValue(value + 1)
    }
  }

    function resetGame() {
      setCounter(0)
      setValue(1)
    }
  
    return (
      <main>
        {
         counter < 100 ? (
        <>
               <h1>Current Score: {counter}</h1>
        <button onClick={scorePlus}>+{value}</button>
        <button onClick={paySystem}>Pay 10 points to change from +{value} to +{value + 1}</button>
        </>
         ) : (
          <>
          <h2>You Win!</h2>
          <button type="submit" onClick={resetGame}>Play Again?</button>
          </>
         )

        }
      </main>
    );
}

export default App;


// if(counter >= 100){

// }



