/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useMorph } from 'react-morph';

export default function ColorContrast() {
  const [toggle, setToggle] = useState(true);
  const morph = useMorph();

  return (
    <button className="plain-button" onClick={() => setToggle(!toggle)}>
      {toggle && (
        <div className="cards bad-contrast">
          <p {...morph} className="bad-contrast">
            This is an example of really bad color contrast. It is very hard to
            see what is written here...
          </p>
          <p {...morph} className="bad-contrast large-text">
            Even when the text is really big!
          </p>
        </div>
      )}

      {!toggle && (
        <div className="cards good-contrast">
          <p {...morph} className="good-contrast large-text">
            Now that the contrast is fixed, it is easier for everyone to see!
          </p>
          <p {...morph}>Even with small text!</p>
        </div>
      )}
    </button>
  );
}
