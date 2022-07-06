import React from 'react';
import './GameInit.css';

class GameInit extends React.Component {
    constructor(props) {
        super(props);
        this.handlestartClick = this.handlestartClick.bind(this);
    }

    handlestartClick() {
        this.props.start();
    }
    
    render () {
        return (
            <button className='buttonStart' onClick={this.handlestartClick}>Start </button>
        )
    }
}

export default GameInit;