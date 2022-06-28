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
                <GameInit />
              </div>
              <div>
                <GameInfo />
              </div>
          </div>
          <div className='gameBoard'>
              <GameBoard />  
          </div>
                  
        </div>
      )
  }
}

export default App;
