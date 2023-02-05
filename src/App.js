import React from "react";
import "./App.css";
import { useState } from "react";


function App () {

    const [counter, setCounter] = useState(0)
    const [i, setI] = useState(1)

    function increasePoints() {
        setCounter(counter + i);
    }

    function payPoints() {
        
        if (counter >= 10) {
            setI(i+1);
            setCounter(counter - 10);
        } else { 
            window.alert("You can't afford that!")
        }
    }

    function playAgain(){
        setCounter(0);
        setI(1);
    }

    
    if (counter >= 100) {
        return (
            <main>
                <h1>You Win!</h1>
                <button onClick={playAgain}>Play again?</button>
            </main>
        )
    } else {
        return (
            <main>
                <h1>Current Score: {counter}</h1>
                <button onClick={increasePoints}>+{i}</button>
                <br></br>
                <button onClick={payPoints}>Pay 10 points to change from +{i} to +{i + 1}</button>
            </main>
        )
    }
    
}

export default App;
