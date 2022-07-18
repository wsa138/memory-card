import Card from './Card';
import '../styles/cardBoard.css';

export default function CardBoard() {
  const cardArray = [0, 1, 2, 3, 4, 5, 6, 7].map((item) => <Card />);

  return <div id="cardBoard">{cardArray} </div>;
}
