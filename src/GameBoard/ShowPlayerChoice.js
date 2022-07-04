import React from 'react';
import './ShowPlayerChoice.css';

class ShowPlayerChoice extends React.Component {
    render() {
        const gameBoard = this.props.game;
        const c1 = gameBoard.table[0];
        const c2 = gameBoard.table[1];
        const c3 = gameBoard.table[2];
        const c4 = gameBoard.table[3];
        const c5 = gameBoard.table[4];
        const c6 = gameBoard.table[5];
        const c7 = gameBoard.table[6];
        const c8 = gameBoard.table[7];
        const c9 = gameBoard.table[8];

        
        return (
            <div className='container'>
                <table>
                    <tbody>
                        <tr>
                            <td>{c1}</td>
                            <td>{c2}</td>
                            <td>{c3}</td>
                        </tr>
                        <tr>
                            <td>{c4}</td>
                            <td>{c5}</td>
                            <td>{c6}</td>
                        </tr>
                        <tr>
                            <td>{c7}</td>
                            <td>{c8}</td>
                            <td>{c9}</td>
                        </tr>  
                    </tbody>

                </table>
            </div>
        )
    }
}

export default ShowPlayerChoice;