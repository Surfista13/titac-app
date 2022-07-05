import React from 'react';
import ShowPlayerChoice from './ShowPlayerChoice';

class GameBoard extends React.Component {
  
    render() {
        return (
            <div>
                <ShowPlayerChoice game={this.props.game} choice={this.props.choice} handleChoice={this.props.handleChoice}/> {/* descente de l'objet GAME*/}
            </div>
        )
    }
}

export default GameBoard;