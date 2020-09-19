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
          <button className="over-justified bg" {...morph}>
            Many people with cognitive disabilities have a great deal of trouble with blocks of text
            that are justified (aligned to both the left and the right margins). The spaces between
            words create "rivers of white" running down the page, which can make the text difficult
            for some people to read. This failure describes situations where this confusing text
            layout occurs. The best way to avoid this problem is not to create text layout that is
            fully justified.
          </button>
        )}
        {!toggle && (
          <button className="left-justified bg" {...morph}>
            Many people with cognitive disabilities have a great deal of trouble with blocks of text
            that are justified (aligned to both the left and the right margins). The spaces between
            words create "rivers of white" running down the page, which can make the text difficult
            for some people to read. This failure describes situations where this confusing text
            layout occurs. The best way to avoid this problem is not to create text layout that is
            fully justified.
          </button>
        )}
      </div>
    </div>
  );
}
