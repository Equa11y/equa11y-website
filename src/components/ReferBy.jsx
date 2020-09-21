import React, { useState } from 'react';
import { useMorph } from 'react-morph';

export default function ReferBy() {
  const [toggle, setToggle] = useState(true);
  const morph = useMorph();

  return (
    <div className="cards">
      <button className="morph-button" onClick={() => setToggle(!toggle)}>
        {toggle ? 'Make it accessible!' : 'Make it inaccessible...'}
      </button>
      <div className="referBy">
        <section id="rbSection">
          <h1>Make sure that information is conveyed by content and not just color.</h1>
          <p>
            In the below list, someone with red/green colorblindness would have no idea which
            recommendations are <em>do's</em> and which are <em>don'ts</em>.
          </p>
        </section>
        {toggle && (
          <button className="bg" {...morph}>
            <ul className="rbColor">
              <li className="do">Arrive early.</li>
              <li className="dont">"Reply all" to emails.</li>
              <li className="do">Dress appropriately for the office.</li>
              <li className="dont">Be afraid to ask questions.</li>
              <li className="do">Be open-minded.</li>
              <li className="dont">Gossip about coworkers.</li>
              <li className="do">Be prepared.</li>
              <li className="dont">Neglect Hygiene.</li>
            </ul>
          </button>
        )}
        {!toggle && (
          <button className="bg" {...morph}>
            <ul className="rbContent">
              <li className="do">Do: Arrive early.</li>
              <li className="dont">Don't: "Reply all" to emails.</li>
              <li className="do">Do: Dress appropriately for the office.</li>
              <li className="dont">Don't: Be afraid to ask questions.</li>
              <li className="do">Do: Be open-minded.</li>
              <li className="dont">Don't: Gossip about coworkers.</li>
              <li className="do">Do: Be prepared.</li>
              <li className="dont">Don't: Neglect Hygiene.</li>
            </ul>
          </button>
        )}
      </div>
    </div>
  );
}
