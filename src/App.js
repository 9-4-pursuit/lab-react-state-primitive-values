import React, {useState}from "react";
import "./App.css";

function App () {
   const[score, setScore] = useState(0);
   const [increment, setIncrement] = useState(1)
  

   function changeScore() {
    setScore(score + increment);
    if (score >=100) {
      return (
        <div>
          <h2>You Win!</h2>
        </div>
      )
    }
   }

   function byIncrements() {
    if (score < 10){
      window.alert("You can't afford that!")
     } else {
      setIncrement(increment + 1);
      setScore(score - 10);
     }
    }

    return (
      <main>
        <h1>Current Score: {score}</h1>
        <button onClick={changeScore}> +{increment}</button>
        <button onClick={byIncrements}> {increment + 1}Pay 10 points to change from 1 to 2</button>
      </main>
    );
}

export default App;
