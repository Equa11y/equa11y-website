/* eslint-disable prettier/prettier */
import React from 'react';

export default function Links() {
  return (
    <main>
      <nav aria-label="breadcrumbs" className="breadcrumbs">
        <span>
          <a className="breadcrumb-links" href="/">
            Home
          </a>
        </span>
        <span> {'>'} </span>
        <span>
          <a className="breadcrumb-links">Useful Links</a>
        </span>
      </nav>
      <header className="innerMainPage">
        <h1>Useful Links and More Information</h1>
      </header>
      <body className="innerMainPage">
        <ul>
          <li>
            <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" role="link">
              WC3 Web Content Accessibility Guidelines
            </a>
            (WCAG) Overview
          </li>

          <li>
            Blog from UK Government:
            <a
              href="https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/"
              target="_blank"
              role="link"
            >
              What we found when we tested tools on the world’s least-accessible webpage
            </a>
          </li>
          <li>
            WCAG 2.1
            <a
              href="https://idahotc.com/Portals/0/Resources/636/WCAG_2.1_Checklist.pdf"
              target="_blank"
              role="link"
            >
              Accessiblity Checklist
            </a>
          </li>

          <li>
            Web Accessibility in the News:
            <a
              href="https://www.cnbc.com/2019/10/07/dominos-supreme-court.html"
              target="_blank"
              role="link"
            >
              Domino's Pizza v. Guillermo Robles
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/docs/accessibility.html" target="_blank" role="link">
              React and Accessbility
            </a>
          </li>
          <li>Link to our medium articles etc</li>
        </ul>
      </body>
    </main>
  );
}
