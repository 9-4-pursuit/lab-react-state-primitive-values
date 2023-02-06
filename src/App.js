import React, {useState}from "react";
import "./App.css";

function App () {
   const[score, setScore] = useState(0);
   const [increment, setIncrement] = useState(1)
  

   function changeScore() {
    setScore(score + increment);
   }

   function byIncrements() {
    if (score < 10){
      window.alert("You can't afford that!")
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
