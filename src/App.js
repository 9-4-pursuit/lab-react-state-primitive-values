import React, {useState}from "react";
import "./App.css";

function App () {
   const[score, setSCore] = useState(0);
   const [increment, setIncrement] = useState(1)

   function changeScore() {
    setSCore(score + increment);
   }
    return (
      <main>
        <h1>Current Score: {score}</h1>
        <button onClick={changeScore}> +{increment}</button>
      </main>
    );
}

export default App;
