import '../styles/Rules.css';
import { useState } from 'react';

export default function Rules() {
  const [showRules, setShowRules] = useState(false);
  const rules = 'See if you can click each card once, without repeating.';

  const rulesClick = () => {
    setShowRules(!showRules);
  };

  const rulesDiv = (
    <div id="rulesModalBorder">
      <div id="rulesModal">
        <p id="rulesText">{rules}</p>
        <button onClick={rulesClick} id="closeButton">
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div id="rulesContainer">
      <button onClick={rulesClick}>Rules</button>
      {showRules ? rulesDiv : null}
      {showRules ? <div class="overlay"></div> : null}
    </div>
  );
}
