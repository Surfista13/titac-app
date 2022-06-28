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
                    <PlayerTurn />  
                    <PlayersResults />
                </div>                        
                <div className='playerAttribution'>
                   <PlayerAttribution />   
                </div> 
            </div>
        )
    }
}

export default GameInfo;