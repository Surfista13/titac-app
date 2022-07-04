import React from 'react';
import ShowPlayerChoice from './ShowPlayerChoice';

class GameBoard extends React.Component {
    render() {
        return (
            <div>
                <ShowPlayerChoice game={this.props.game}/> {/* descente de l'objet GAME*/}
            </div>
        )
    }
}

export default GameBoard;