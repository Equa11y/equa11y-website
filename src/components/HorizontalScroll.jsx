import React, { useState } from 'react';
import { useMorph } from 'react-morph';

export default function Justified() {
  const [toggle, setToggle] = useState(true);

  const morph = useMorph();

  return (
    <div className="cards horizontalScroll">
      <button className="morph-button" onClick={() => setToggle(!toggle)}>
        {toggle ? 'Make it accessible!' : 'Make it inaccessible...'}
      </button>
      {toggle && (
        <div className="scroll box" {...morph}>
          <p>
            Horizontal scrolling is a pain. Like seriously unless you have a trackpad what's even
            the point?!
          </p>
        </div>
      )}
      {!toggle && (
        <div className="wrap box" {...morph}>
          <p>
            Aahhhhhh. This is so much better. A clear block of text that has a nice pretty wrap.
          </p>
        </div>
      )}
    </div>
  );
}
