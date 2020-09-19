import React, { useState } from 'react';
import { useMorph } from 'react-morph';

export default function InnerSiteFooter() {
  const [toggle, setToggle] = useState(true);
  const morph = useMorph();

  return (
    <div>
      <button className="innerFooter" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <p className="footerBad" {...morph}>
            Tiny font in the footer is pretty common. However, small font can be really difficult
            for those who are visually impaired.
          </p>
        ) : (
          <p className="footerGood" {...morph}>
            This is much easier to read for everyone who visits your site.
          </p>
        )}
      </button>
    </div>
  );
}

// export default function InnerSiteFooter() {
//
//   return (
//     <div>
//       <button className="innerFooter">
//         <p className="footerBad">
//           Tiny font in the footer is pretty common. However, small font can be
//           really difficult for those who are visually impaired.
//         </p>
//       </button>
//     </div>
//   );
// }
