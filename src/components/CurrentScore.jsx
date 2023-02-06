import { useState } from "react"

function CurrentScore () {

const [score, setScore] = useState(0)
const [power, setPower] = useState(1)
const [win , toggleWin] = useState(false)




function scored () {
    if(score + power >= 100) {
        toggleWin(!win)
    } else {
        setScore(score + power)  
    }
   
}

function powerUp() {
    if (score >= 10) {
    setScore(score-10)
    setPower(power +1)
    } else {
        alert("You can't afford that!")
    }
}

function reset() {
    setScore(0)
    setPower(1)
    toggleWin(false)

}


    if (!win) {
        return (<div>
            <main >
                <h1>Current Score: {score}</h1>
            </main>
            <button  onClick={scored}> +{power}</button>
            <br/>
            <button  onClick={powerUp}>Pay 10 points to change from +{power} to +{power+1}</button>
            
        </div>)
    } else {
        return (
            <div>
            <h2 >You Win!</h2>
            <button onClick={reset} >Play again?</button>
            </div>
        )
    }
        
    
}

export default CurrentScore