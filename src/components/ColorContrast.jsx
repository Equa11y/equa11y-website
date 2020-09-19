/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useMorph } from 'react-morph';

export default function ColorContrast() {
  const [toggle, setToggle] = useState(true);
  const morph = useMorph();

  return (
    <div className="cards contrastCard">
      <button className="morph-button" onClick={() => setToggle(!toggle)}>
        {toggle ? 'Make it accessible!' : 'Make it inaccessible...'}
      </button>
        <div className="cardsBody">
          {toggle && (
            <button className="bad-contrast bgContrast" {...morph}>
              This is an example of really bad color contrast. It is very hard to
              see what is written here...<br/>
              <span className="large-text">Even when the text is really big!</span>
            </button>
          )}
          {!toggle && (
            <button {...morph} className="good-contrast bgContrast">
              Now that the contrast is fixed, it is easier for everyone to see!<br/>
              <span className="large-text">Even with small text!</span>
            </button>
          )}
        </div>
    </div>
  );
}
