import React from 'react';
import './PlayerTurn.css';

class PlayerTurn extends React.Component {

    render() {
        return (
            <div>
                <label className='turn'>Who's turn</label>
                <br/>
                <p className='turnPlayer'>player 1</p>
            </div>
        )
    }
}

export default PlayerTurn;