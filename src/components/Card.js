import '../styles/Card.css';

export default function Card(props) {
  return (
    <div class="card" onClick={() => props.handleCardClick(props.cardDisplay)}>
      <img
        class="cardImage"
        src={props.cardDisplay}
        alt="A character from Game Of Thrones"
      />
    </div>
  );
}
