import React from 'react';
import './App.css';
import GameInfo from './GameInfo/GameInfo';
import GameInit from './GameInit/GameInit';
import GameBoard from './GameBoard/GameBoard';

const players= 
  {
    players: [{name:1, attribution:"X",isWinner:false, isTurn:true},{name:1, attribution:"O",isWinner:false, isTurn:false}],
    table: ["","","","","","","","",""] //supprimer et utiliser un etat
  };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCaseChoice:players.table
    };
    this.handlePlayerCaseChoice = this.handlePlayerCaseChoice.bind(this);
    this.handlePlayersTurn = this.handlePlayersTurn.bind(this);
  };

  // handle player turn method
  handlePlayersTurn () {
    if (players.players[0].isTurn) {
      players.players[1].isTurn = true;
      players.players[0].isTurn = false;
    } else {
      players.players[1].isTurn = false;
      players.players[0].isTurn = true;
    }

  }

  // handle click player on case of the board - method
  handlePlayerCaseChoice (playerCaseChoice) {
    const handlePlayerChoices = players;
    
    const turn = players.players[0].isTurn;
    
    turn ? handlePlayerChoices.table[playerCaseChoice] = handlePlayerChoices.players[0].attribution : handlePlayerChoices.table[playerCaseChoice] = handlePlayerChoices.players[1].attribution;

    const choice = handlePlayerChoices.table;
    
    if (players.players[0].isWinner === true || players.players[1].isWinner === true) {
      return
    }
    this.setState({
      playerCaseChoice:choice
    })
    this.handleWinner ();
    
    this.handlePlayersTurn ();   
  }

  // handle winner method
  handleWinner () {
    const winningCombinaisons = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    
    let indices = [];
    let currentPlayerAttribution = "";
    
    players.players[0].isTurn ? currentPlayerAttribution = players.players[0].attribution : currentPlayerAttribution = players.players[1].attribution
    
    let idx = players.table.indexOf(currentPlayerAttribution);

    while (idx != -1) {
      indices.push(idx);
      idx = players.table.indexOf(currentPlayerAttribution, idx + 1);
    }
    for (let i=0 ; i < winningCombinaisons.length ; i++) {
      if (JSON.stringify(winningCombinaisons[i]) == JSON.stringify(indices)) {
        players.players[0].isTurn ? players.players[0].isWinner = true :  players.players[1].isWinner = true;       
      }
    }

  }
  
  render() {
      return (
        <div >
          <div className='container'>
              <div>
                <GameInit game={players}/>
              </div>
              <div>
                <GameInfo game={players}/>
              </div>
          </div>
          <div className='gameBoard'>
              <GameBoard game={players} choice={this.state.playerCaseChoice} handleChoice={this.handlePlayerCaseChoice}/>  
          </div>
                  
        </div>
      )
  }
}

export default App;
