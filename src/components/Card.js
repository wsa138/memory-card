export default function Card(props) {
  return <div onClick={props.increaseScore}>{props.cardDisplay}</div>;
}
