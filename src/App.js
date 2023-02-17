import React from "react";
import { useState } from 'react';
import "./App.css";

function App () {

  const [counter, setCounter] = useState(0);
  const [point, setPoint] = useState(1);

  function addOne() {
    setCounter(counter + point); 
  }

  function payPoints() {

    if (counter >= 10) {
      setPoint(point + 1);
      setCounter(counter - 10);
    }
    else {
      window.alert("You can't afford that!")
    }
  }

  function again() {
    setCounter(0);
    setPoint(1);
  }

  if (counter >= 100) {
    return (
    <main>
      <h1>You Win!</h1>
      <button onClick={again}>Play again?</button>
    </main>
    )
  }
  else {
    return (
      <main>
        <h1> Current Score: {counter} </h1>
        <button onClick={addOne}>+{point}</button>
        <button onClick={payPoints}> Pay 10 points to change from +{point} to +{point + 1}</button>
      </main>
    )
  }

  // function to add number and substract here 
    // return (
    //   <>
    //   <main>
    //     <h1> Current Score: {counter} </h1>
    //     {/* <p>React State Lab</p> */}
    //     <button onClick={addOne()}> +1 </button>
    //   </main>
    //   </>
    // );
}

export default App;
