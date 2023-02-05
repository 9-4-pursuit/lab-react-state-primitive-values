import { useState } from 'react';
import "./App.css";

function App () {

    const [currentScore, setNewScore] = useState(0);
    const [incrementor, setNewIncrementor] = useState(1);

    function increaseScore() {
      setNewScore(currentScore + incrementor);
    }

    function levelUp() {
      if(currentScore < 10) {
        alert("You can't afford that!");
      } else {
        setNewIncrementor(incrementor + 1);
        setNewScore(currentScore - 10);
      }
    }

    function playOver() {
      setNewScore(0);
      setNewIncrementor(1);
    }

    // const { currentScore, incrementor } = 
    return currentScore >= 100 ? (
      <main>
        <h1>You Win! { currentScore }</h1>
        <button type="submit" onClick={playOver}>Play again?</button>
      </main> 
      ) : (
      <main>
        <h1>Current Score: { currentScore }</h1>
        <button onClick={increaseScore}>+{incrementor}</button>
        <button onClick={levelUp}>Pay 10 points to change from +{incrementor} to +{incrementor + 1}</button>
      </main>
    );
}

export default App;
