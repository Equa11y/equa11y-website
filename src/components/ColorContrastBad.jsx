/* eslint-disable prettier/prettier */
import React from 'react';

export default function ColorContrastBad() {
  return (
    <div className="cards bad-contrast">
      <p className="bad-contrast">
        This is an example of really bad color contrast. It is very hard to see
        what is written here...
      </p>
      <p className="bad-contrast large-text">
        Even when the text is really big!
      </p>
    </div>
  );
}
