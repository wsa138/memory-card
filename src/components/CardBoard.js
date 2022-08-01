import Card from './Card';
import '../styles/cardBoard.css';
import gotImages from '../images/imageIndex';
import { useState } from 'react';

export default function CardBoard(props) {
  const [clickedArray, setClickedArray] = useState([]);
  // Will eventually contain the card images.
  const cardArray = gotImages;

  // Resets game or increases score.
  const handleCardClick = (clickedCard) => {
    // If card has already been clicked, reset the game.
    if (clickedArray.includes(clickedCard)) {
      props.resetGame();
      setClickedArray([]);
    } else {
      props.increaseScore();
      // Add clicked card to clickedArray
      setClickedArray((prevState) => [...prevState, clickedCard]);
      // FIXME: Shuffle the cards as they appear on screen.
    }
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
