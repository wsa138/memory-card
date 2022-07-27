export default function Card(props) {
  return <div onClick={props.handleCardClick}>{props.cardDisplay}</div>;
}
