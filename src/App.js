import React from 'react';
import './App.css';
import GameInfo from './GameInfo/GameInfo';
import GameInit from './GameInit/GameInit';
import GameBoard from './GameBoard/GameBoard';

const players= 
  {
    players: [{name:1, attribution:"X",isWinner:false, isTurn:true, isDraw:false},{name:2, attribution:"O",isWinner:false, isTurn:false, isDraw:false}],
    table: ["","","","","","","","",""] //supprimer et utiliser un etat
  };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCaseChoice:players.table,
      isInit:false
    };
    this.handlePlayerCaseChoice = this.handlePlayerCaseChoice.bind(this);
    this.handlePlayersTurn = this.handlePlayersTurn.bind(this);
    this.handleStart = this.handleStart.bind(this);
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
    if (players.players[0].isWinner || players.players[1].isWinner) {
      return
    }
    const handlePlayerChoices = players;
    const turn = players.players[0].isTurn;
    if (handlePlayerChoices.table[playerCaseChoice] !== "") {
      return
    }
    turn ? handlePlayerChoices.table[playerCaseChoice] = handlePlayerChoices.players[0].attribution : handlePlayerChoices.table[playerCaseChoice] = handlePlayerChoices.players[1].attribution;
    const choice = handlePlayerChoices.table;
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

    while (idx !== -1) {   //calcul à chaque tour pour un joueur d'un array des index de ses choix
      indices.push(idx);
      idx = players.table.indexOf(currentPlayerAttribution, idx + 1);
    }
    let combinaison = new Array();   
    for (let i = 0; i <= winningCombinaisons.length-1; i++) {
      for (let j = 0; j <= indices.length-1; j++) {
        for (let k = 0; k <= winningCombinaisons[i].length-1; k++) {                             
            if (winningCombinaisons[i][k] === indices[j]) {
            combinaison.push(indices[j]) 
            }       
        }        
      } 
      if (combinaison.length === 3) {
        players.players[0].isTurn ? players.players[0].isWinner = true :  players.players[1].isWinner = true;
        return
          } 
      else {
        combinaison = [];
      }     
    }
    //const turnLeft = this.state.playerCaseChoice.filter(x => x.length==0); GESTION DU DRAW ??

  };

  // attribution player signe method
  handleAttribution() {
    const playerOnePosition = Math.random();
    const playerTwoPosition = Math.random();

    if (playerOnePosition >= playerTwoPosition) {
      players.players[0].attribution = "X";
      players.players[1].attribution = "O";
    } else {
      players.players[0].attribution = "O";
      players.players[1].attribution = "X";
    }  
  }

    // turn player method
    handleTurn() {
      const playerOneTurn = Math.random();
      const playerTwoTurn = Math.random();
  
      if (playerOneTurn >= playerTwoTurn) {
        players.players[0].isTurn = true;
        players.players[1].isTurn = false;
      } else {
        players.players[0].isTurn = false;
        players.players[1].isTurn = true;
      }
    }

  // initialisation method
  handleInitialisation() {
    this.setState({
      playerCaseChoice:["","","","","","","","",""]
    })
    players.table = ["","","","","","","","",""];
    players.players[0].isWinner = false;
    players.players[1].isWinner = false;
  }

  // start method
  handleStart() {
    this.handleInitialisation();
    this.handleAttribution();
    this.handleTurn();
    this.setState({
      isInit:false
    })
  }

  render() {
      return (
        <div >
          <div className='container'>
              <div>
                <GameInit start={this.handleStart}/>
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
