import React from 'react';
import './PlayerAttribution.css';

class PlayerAttribution extends React.Component {
    render() {
        return (
            <div>
                <label className='attributionLabel'>Attribution</label>
                <br/>
                <p className='attribution'>player 1 play with X and player 2 with O</p>
            </div>
        )
    }
}

export default PlayerAttribution;