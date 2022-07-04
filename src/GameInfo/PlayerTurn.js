import React from 'react';
import './PlayerTurn.css';

class PlayerTurn extends React.Component {

    render() {
        const game = this.props.game; {/* récupération de l'objet GAME */}
        let turn = "waiting";
        let playerOneTurn = game.players[0].isTurn;
        let playerTwoTurn = game.players[1].isTurn;

        playerOneTurn && (turn = "Player 1");
        playerTwoTurn && (turn = "Player 2");
        
        return (
            <div>
                <label className='turn'>Who's turn</label>
                <br/>
                <p className='turnPlayer'>{turn}</p>
            </div>
        )
    }
}

export default PlayerTurn;