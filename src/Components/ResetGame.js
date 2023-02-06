import React from 'react';

function ResetGame(props) {
    return (
        <div>
            <h2>You Win!</h2>
          <button onClick={props.resetGame}>Play again?</button>
        </div>
    );
}

export default ResetGame;