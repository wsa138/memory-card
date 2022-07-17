export default function ScoreBoard(props) {
  return (
    <div>
      ScoreBoard
      <div>Current Score: {props.currentScore}</div>
      <div>High Score: {props.highSchore} </div>
    </div>
  );
}
