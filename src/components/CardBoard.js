import Card from './Card';
import '../styles/cardBoard.css';

export default function CardBoard(props) {
  const cardArray = [0, 1, 2, 3, 4, 5, 6, 7];

  // Handles everything that needs to happen when a card is clicked.
  const handleCardClick = () => {
    props.increaseScore();
  };

  const cardComponentArray = cardArray.map((item) => (
    <Card handleCardClick={handleCardClick} key={item} cardDisplay={item} />
  ));

  return <div id="cardBoard">{cardComponentArray} </div>;
}
