import React from "react";
import { useState } from "react";
import "./App.css";

function App () {

  const [counter, setCounter] = useState(0);
  const [current, setCurrent] = useState(1);

  function game(){
    setCounter(counter + current);
    }

  function refresh(){
    setCounter(0)
    setCurrent(1)
  }

  function tenPoints(){
   if(counter < 10){
    alert("You can't afford that!")
   } else if (counter >= 10){
   setCounter(counter -10)
   setCurrent(current + 1)
   }
  }
  if(counter < 100){
    return (
      <main>
        <div>
        <h3>Current Score: {counter}</h3>
        <button onClick={game}> +{current} </button>
        <br></br>
        <button onClick={tenPoints}>Pay 10 points to change from +{current} to +{current + 1}</button>
        </div>
      </main>
    );
  } else if (counter >= 100){
    return (
    <main>
      <div>
        <h1>{counter}</h1>
        <h2>You Win!</h2>
        <button onClick={refresh}>Play again?</button>
      </div>
    </main>
    )
  }
}

export default App;
