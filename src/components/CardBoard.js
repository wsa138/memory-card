import Card from './Card';
import '../styles/cardBoard.css';
import gotImages from '../images/imageIndex';

export default function CardBoard(props) {
  // Will eventually contain the card images.
  const cardArray = gotImages;

  // FIXME: Function needs the rest of it's functionality added.
  // Handles everything that needs to happen when a card is clicked.
  const handleCardClick = () => {
    // If card has not been clicked yet, increase score.
    //FIXME: Additionally needs to set the high score.
    props.increaseScore();
    // If card has already been clicked, reset the game.
    props.resetGame();
    // Shuffle the cards as they appear on screen.
  };

  const cardComponentArray = cardArray.map((image) => (
    <Card handleCardClick={handleCardClick} key={image} cardDisplay={image} />
  ));

  return (
    <div>
      <div id="cardBoard">{cardComponentArray} </div>
    </div>
  );
}
