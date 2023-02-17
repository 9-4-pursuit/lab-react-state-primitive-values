import React from 'react';

function resetGame(props) {
    return (
        <div>

            <h2>You Win!</h2>
          <button type="submit" onClick={props.resetGame}>Play Again?</button>
            
        </div>
    );
}

export default resetGame;