import React, { useState } from 'react';
import { useMorph } from 'react-morph';

export default function Justified() {
  const [toggle, setToggle] = useState(true);

  const morph = useMorph();

  return (
    <div className="cards">
      <button className="morph-button" onClick={() => setToggle(!toggle)}>
        Make it accessible!
      </button>
      {toggle && (
        <p className="over-justified" {...morph}>
          Many people with cognitive disabilities have a great deal of trouble
          with blocks of text that are justified (aligned to both the left and
          the right margins). The spaces between words create "rivers of white"
          running down the page, which can make the text difficult for some
          people to read. This failure describes situations where this confusing
          text layout occurs. The best way to avoid this problem is not to
          create text layout that is fully justified.
        </p>
      )}
      {!toggle && (
        <p className="left-justified" {...morph}>
          Many people with cognitive disabilities have a great deal of trouble
          with blocks of text that are justified (aligned to both the left and
          the right margins). The spaces between words create "rivers of white"
          running down the page, which can make the text difficult for some
          people to read. This failure describes situations where this confusing
          text layout occurs. The best way to avoid this problem is not to
          create text layout that is fully justified.
        </p>
      )}
    </div>
  );
}
