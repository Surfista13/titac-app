import React from 'react';
import './PlayersResults.css';

class PlayersResults extends React.Component {

    render() {
        return (
            <div>
                <label className='results'>Results</label>
                <br/>
                <p className='resultsPlayer'>player 1 WIN</p>
            </div>
        )
    }
}

export default PlayersResults