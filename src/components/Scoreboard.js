import '../styles/Scoreboard.css';

export default function ScoreBoard(props) {
  return (
    <div id="scoreboardContainer">
      <div id="scoreboard">
        <div>Current Score: {props.currentScore}</div>
        <div>High Score: {props.highSchore} </div>
      </div>
    </div>
  );
}
