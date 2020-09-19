import React, { useState } from 'react';
import { useMorph } from 'react-morph';

export default function MorphButton() {
  const [toggle, setToggle] = useState(true);
  const morph = useMorph();

  return (
    <div className="cards">
      <button className="morph-button" onClick={() => setToggle(!toggle)}>
        {toggle ? 'Make it accessible!' : 'Make it inaccessible...'}
      </button>
      <div className="cardsBody">
        {toggle && (
          <button className="bad-button bgButton" {...morph}>
            Not Accessible
          </button>
        )}
        {!toggle && (
          <button className="good-button bgButton" {...morph}>
            Accessible
          </button>
        )}
      </div>
    </div>
  );
}
