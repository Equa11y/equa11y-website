import React from "react";

export default function InnerSiteNav() {
  return (
    <div className="innerHeader">
      <header>
        <h1>Why Accessibility?</h1>
      </header>
      <div id="innerNav">
        <ul>
          <li>
            <a class="active" href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
