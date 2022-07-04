import React from 'react';
import './App.css';
import GameInfo from './GameInfo/GameInfo';
import GameInit from './GameInit/GameInit';
import GameBoard from './GameBoard/GameBoard';

class App extends React.Component {

  render() {
      return (
        <div >
          <div className='container'>
              <div>
                <GameInit game={this.props.game}/>
              </div>
              <div>
                <GameInfo game={this.props.game}/>
              </div>
          </div>
          <div className='gameBoard'>
              <GameBoard game={this.props.game}/>  
          </div>
                  
        </div>
      )
  }
}

export default App;
