import ScoreBoard from './Scoreboard';
import '../styles/GameBoard.css';
import { useState } from 'react';

export default function GameBoard() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div>
      <h1>Memory Card Game</h1>
      <ScoreBoard highSchore={highScore} currentScore={currentScore} />
    </div>
  );
}
