import React from 'react';
import './App.css';
import GameInfo from './GameInfo/GameInfo';
import GameInit from './GameInit/GameInit';

class App extends React.Component {

  render() {
      return (
        <div className='container'>
          <div>
            <GameInit />
          </div>
          <div>
            <GameInfo />
          </div>
          
        </div>
      )
  }
}

export default App;
