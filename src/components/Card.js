export default function Card(props) {
  return (
    <div onClick={() => props.handleCardClick(props.cardDisplay)}>
      <img src={props.cardDisplay} alt="" />
    </div>
  );
}
