import React, { useState } from 'react';
import { useMorph } from 'react-morph';

export default function MorphButton() {
  const [toggle, setToggle] = useState(true);

  const morph = useMorph();

  return (
    <div className="cards">
      <button className="morph-button" onClick={() => setToggle(!toggle)}>
        Make it accessible!
      </button>
      <br></br>
      {toggle && (
        <button className="bad-button" {...morph}>
          Not Accessible
        </button>
      )}
      {!toggle && (
        <button className="good-button" {...morph}>
          Accessible
        </button>
      )}
    </div>
  );
}
