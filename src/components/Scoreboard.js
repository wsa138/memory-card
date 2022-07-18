import '../styles/Scoreboard.css';

export default function ScoreBoard(props) {
  return (
    <div id="scoreboard">
      ScoreBoard
      <div>Current Score: {props.currentScore}</div>
      <div>High Score: {props.highSchore} </div>
    </div>
  );
}
