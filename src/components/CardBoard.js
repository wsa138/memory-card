import Card from './Card';
import '../styles/cardBoard.css';

export default function CardBoard(props) {
  // Will eventually contain the card images.
  const cardArray = [0, 1, 2, 3, 4, 5, 6, 7];

  // FIX Function: Needs the rest of it's functionality added.
  // Handles everything that needs to happen when a card is clicked.
  const handleCardClick = () => {
    // If card has not been clicked yet, increase score.
    //FIX: Additionally needs to set the high score.
    props.increaseScore();
    // If card has already been clicked, reset the game.
    props.resetGame();
    // Shuffle the cards as they appear on screen.
  };

  const cardComponentArray = cardArray.map((item) => (
    <Card handleCardClick={handleCardClick} key={item} cardDisplay={item} />
  ));

  return <div id="cardBoard">{cardComponentArray} </div>;
}
