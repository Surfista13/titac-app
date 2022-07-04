import React from 'react';
import './PlayerAttribution.css';

class PlayerAttribution extends React.Component {
    render() {
        const game = this.props.game; {/* récupération de l'objet GAME */}
        const playersOneAttribution = game.players[0].attribution;
        const playersTwoAttribution = game.players[1].attribution;
        const attribution = `player 1: ${playersOneAttribution} / player 2: ${playersTwoAttribution}`;
        
        return (
            <div>
                <label className='attributionLabel'>Attribution</label>
                <br/>
                <p className='attribution'>{attribution}</p>
            </div>
        )
    }
}

export default PlayerAttribution;