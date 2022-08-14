import ScoreBoard from './Scoreboard';
import '../styles/GameBoard.css';
import { useEffect, useState } from 'react';
import CardBoard from './CardBoard';
import Rules from './Rules';

export default function GameBoard() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [win, setWin] = useState(false);

  // Checks to see if currentScore is higher than highScore.
  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore]);

  // Check if high score === 24, then acknowledge win.
  useEffect(() => {
    if (highScore === 24) {
      setWin(true);
      setTimeout(winGame, 3000);
    }
  }, [highScore]);

  function increaseScore() {
    setCurrentScore((prevState) => prevState + 1);
  }

  // This function resets the score.
  const resetGame = () => {
    setCurrentScore(0);
  };

  const winGame = () => {
    setWin(false);
    setHighScore(0);
    resetGame();
  };

  const winDiv = (
    <div id="winModalBorder">
      <div id="winModal">
        <p id="winText">Winner!</p>
      </div>
    </div>
  );

  return (
    <div>
      <h1 id="title">Memory Game</h1>
      <Rules />
      <ScoreBoard highSchore={highScore} currentScore={currentScore} />
      <CardBoard increaseScore={increaseScore} resetGame={resetGame} />
      {win ? winDiv : null}
      {win ? <div class="overlay"></div> : null}
    </div>
  );
}
