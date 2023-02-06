import React from 'react';

function StartGame(props) {
    return (
        <div>
            <h2>Current Score: {props.counter}</h2>
            <p>React State Lab</p>
            <button onClick={props.increment}>+{props.value}</button>
            <button onClick={props.pay10Points}>Pay 10 points to change from +{props.value} to +{props.value + 1}</button>
        </div>
    );
}

export default StartGame;