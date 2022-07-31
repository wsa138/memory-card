export default function Card(props) {
  return (
    <div onClick={props.handleCardClick}>
      <img src={props.cardDisplay} />
    </div>
  );
}
