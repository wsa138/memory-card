import '../styles/Rules.css';

export default function Rules() {
  const rules = 'See if you can click each card once, without repeating.';

  const rulesClick = () => {
    alert(rules);
  };

  return (
    <div id="rulesContainer">
      <button onClick={rulesClick}>Rules</button>
    </div>
  );
}
