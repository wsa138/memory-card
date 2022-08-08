import Card from './Card';
import '../styles/cardBoard.css';
import gotImages from '../images/imageIndex';
import { useEffect, useState } from 'react';

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
    }
    // Shuffle cardArray
    shuffleCards(cardArray);
  };

  const shuffleCards = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  };

  return (
    <div>
      <div id="cardBoard">
        {cardArray.map((image) => (
          <Card
            handleCardClick={handleCardClick}
            key={image}
            cardDisplay={image}
          />
        ))}{' '}
      </div>
    </div>
  );
}
