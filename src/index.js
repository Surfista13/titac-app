import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const GAME = 
  {
    players: [{name:1, attribution:"X",isWinner:false, isTurn:false},{name:1, attribution:"O",isWinner:false, isTurn:false}],
    table: ["X","X","X","X","X","X","X","X","X"] //contenu case du jeu de 1 à 9 (sens de lecture)
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App game={GAME}/>  {/* descente de l'objet GAME*/}
  </React.StrictMode>
);



