export default function Rules() {
  const rules = 'See if you can click each card once, without repeating.';

  const rulesClick = () => {
    alert(rules);
  };

  return (
    <div>
      <button onClick={rulesClick}>Rules</button>
    </div>
  );
}
