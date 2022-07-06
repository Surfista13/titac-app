import React from 'react';
import './PlayersResults.css';

class PlayersResults extends React.Component {

    render() {
        const game = this.props.game; {/* récupération de l'objet GAME*/}
        let winner = "waiting";
        let playerOneResults = game.players[0].isWinner;
        let playerTwoResults = game.players[1].isWinner;
        let playerOneDraw = game.players[0].isDraw;

        playerOneResults && (winner = "Player 1 WIN");
        playerTwoResults && (winner = "Player 2 WIN");
        playerOneDraw && (winner = "Draw");

        
        
        return (
            <div>
                <label className='results'>Results</label>
                <br/>
                <p className='resultsPlayer'>{winner}</p>
            </div>
        )
    }
}

export default PlayersResults