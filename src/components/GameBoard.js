import ScoreBoard from './Scoreboard';
import '../styles/GameBoard.css';
import { useEffect, useState } from 'react';
import CardBoard from './CardBoard';
import Rules from './Rules';

export default function GameBoard() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  // FIXME: useEffect hook. Runs when score changes,
  // checks to see if currentScore is higher than highScore.
  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore]);

  function increaseScore() {
    setCurrentScore((prevState) => prevState + 1);
  }

  // FIXME: This function resets the score.
  const resetGame = () => {
    setCurrentScore(0);
  };

  return (
    <div>
      <h1 id="title">Memory Card Game</h1>
      <Rules />
      <ScoreBoard
        id="scoreboard"
        highSchore={highScore}
        currentScore={currentScore}
      />
      <CardBoard increaseScore={increaseScore} resetGame={resetGame} />
    </div>
  );
}
