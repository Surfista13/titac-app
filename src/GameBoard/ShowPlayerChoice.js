import React from 'react';
import './ShowPlayerChoice.css';

class ShowPlayerChoice extends React.Component {
    constructor(props) {
        super(props);
        this.handleCaseClick = this.handleCaseClick.bind(this);
    };

    handleCaseClick(e) {
        this.props.handleChoice(e.target.className);
    }
    
    render() {
        const c0 = this.props.choice[0];
        const c1 = this.props.choice[1];
        const c2 = this.props.choice[2];
        const c3 = this.props.choice[3];
        const c4 = this.props.choice[4];
        const c5 = this.props.choice[5];
        const c6 = this.props.choice[6];
        const c7 = this.props.choice[7];
        const c8 = this.props.choice[8];

        
        return (
            <div className='container'>
                <table>
                    <tbody>
                        <tr>
                            <td className='0' onClick={this.handleCaseClick}>{c0}</td>
                            <td className='1'onClick={this.handleCaseClick}>{c1}</td>
                            <td className='2' onClick={this.handleCaseClick}>{c2}</td>
                        </tr>
                        <tr>
                            <td className='3' onClick={this.handleCaseClick}>{c3}</td>
                            <td className='4' onClick={this.handleCaseClick}>{c4}</td>
                            <td className='5' onClick={this.handleCaseClick}>{c5}</td>
                        </tr>
                        <tr>
                            <td className='6' onClick={this.handleCaseClick}>{c6}</td>
                            <td className='7' onClick={this.handleCaseClick}>{c7}</td>
                            <td className='8' onClick={this.handleCaseClick}>{c8}</td>
                        </tr>  
                    </tbody>

                </table>
            </div>
        )
    }
}

export default ShowPlayerChoice;