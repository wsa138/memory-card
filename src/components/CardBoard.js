import Card from './Card';

export default function CardBoard() {
  const cardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => <Card />);

  return (
    <div>
      <div>CardBoard</div>
      {cardArray}{' '}
    </div>
  );
}
