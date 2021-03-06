import ScoreBoard from './Scoreboard';
import '../styles/GameBoard.css';
import { useState } from 'react';
import CardBoard from './CardBoard';

export default function GameBoard() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  function increaseScore() {
    console.log('clicked');
    setCurrentScore((prevState) => prevState + 1);
  }

  return (
    <div>
      <h1 id="title">Memory Card Game</h1>
      <ScoreBoard
        id="scoreboard"
        highSchore={highScore}
        currentScore={currentScore}
      />
      <CardBoard increaseScore={increaseScore} />
    </div>
  );
}
