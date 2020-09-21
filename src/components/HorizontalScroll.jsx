import React, { useState } from 'react';
import { useMorph } from 'react-morph';

export default function Justified() {
  const [toggle, setToggle] = useState(true);

  const morph = useMorph();

  return (
    <div className="cards">
      <button className="morph-button" onClick={() => setToggle(!toggle)}>
        {toggle ? 'Make it accessible!' : 'Make it inaccessible...'}
      </button>
      <div className="cardsBody">
        {toggle && (
          <button className="scroll hrBox bg" {...morph}>
            Horizontal scrolling is a pain. Like seriously unless you have a trackpad what's even
            the point?!
          </button>
        )}
        {!toggle && (
          <button className="wrap hrBox bg" {...morph}>
            Aahhhhhh. This is so much better. A clear block of text that has a nice pretty wrap.
          </button>
        )}
      </div>
    </div>
  );
}
