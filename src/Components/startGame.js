import React from 'react';


function startGame(props) {
    return (
        <div>
        <h1>Current Score: {props.counter}</h1>
        <button onClick={props.scorePlus}>+{props.value}</button>
        <button onClick={props.paySystem}>Pay 10 points to change from +{props.value} to +{props.value + 1}</button> 
            
        </div>
    );
}

export default startGame;