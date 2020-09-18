import React, { useState } from 'react';
import ReferByColor from './ReferByColor';
import ReferByContent from './ReferByContent';
import { useMorph } from 'react-morph';

export default function MorphReferBy() {
  const [toggle, setToggle] = useState(true);
  const morph = useMorph();

  return (
    <div className="cards referBy">
      <button onClick={() => setToggle(!toggle)}>
        <h3>Make sure that information is conveyed by content and not just color.</h3>
        <p>
          In the below list, someone with red/green colorblindness would have no idea which
          reccomendations are "do"s and which are "don't"s.
        </p>
        {toggle && (
          <div {...morph}>
            <ReferByColor />
          </div>
        )}
        {!toggle && (
          <div {...morph}>
            <ReferByContent />
          </div>
        )}
      </button>
    </div>
  );
}
