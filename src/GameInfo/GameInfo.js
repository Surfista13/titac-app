import React from 'react';
import './GameInfo.css';
import PlayerTurn from './PlayerTurn';
import PlayersResults from './PlayersResults';
import PlayerAttribution from './PlayerAttribution';

class GameInfo extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='playerTurnAndResults'>
                    <PlayerTurn game={this.props.game}/>  {/* descente de l'objet GAME*/}
                    <PlayersResults game={this.props.game}/> {/* descente de l'objet GAME*/}
                </div>                        
                <div className='playerAttribution'>
                   <PlayerAttribution game={this.props.game}/> {/* descente de l'objet GAME*/}   
                </div> 
            </div>
        )
    }
}

export default GameInfo;