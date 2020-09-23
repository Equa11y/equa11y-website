/* eslint-disable prettier/prettier */
import React from 'react';

export default function Links() {
  return (
    <div>
      <nav aria-label="breadcrumbs" className="breadcrumbs">
        <span>
          <a className="breadcrumb-links" href="/">
            Home
          </a>
        </span>
        <span className="grain"> {'>'} </span>
        <span>
          <a className="breadcrumb-links">Useful Links</a>
        </span>
      </nav>

      <header className="innerMainPage">
        <h1 className="linksHeader">Useful Links and More Information</h1>
      </header>
      <body className="linksPage">
        <div>
          <h2>Looking to learn more about web accessibility?</h2>
          <ul listStyleType="none">
            <li>
              <a
                href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                target="_blank"
                role="link"
              >
                WC3's Web Content Accessibility Guidelines
              </a>
              <span>
                {' '}
                or WCAG, is the main documentation for all things web accessibility realated.
              </span>
            </li>
            <li>
              <a href="https://www.deque.com/" target="_blank" role="link">
                Deque
              </a>
              <span>
                {' '}
                is a company that has made several accessibility tools and has attempted to make the
                WCAG a little more reader friendly.
              </span>
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
          </ul>
        </div>
        <div>
          <h2>Web accessibility in the news</h2>
          <ul>
            <li>
              <span>Blog from UK Government: </span>
              <a
                href="https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/"
                target="_blank"
                role="link"
              >
                What we found when we tested tools on the world’s least-accessible webpage
              </a>
            </li>

            <li>
              <span>Web Accessibility court case: </span>
              <a
                href="https://www.cnbc.com/2019/10/07/dominos-supreme-court.html"
                target="_blank"
                role="link"
              >
                Domino's Pizza v. Guillermo Robles
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Information and tools for developers</h2>
          <ul>
            <li>
              <a href="https://www.npmjs.com/package/equa11y" target="_blank" role="link">
                Equa11y CLI accessibility testing tool
              </a>
            </li>
            <li>
              <a href="https://reactjs.org/docs/accessibility.html" target="_blank" role="link">
                React and Accessbility
              </a>
            </li>
            <li>
              <a href="https://www.deque.com/axe/devtools/" target="_blank" role="link">
                Deque axe devTools
              </a>
            </li>
            <li>Link to our medium articles</li>
          </ul>
        </div>
      </body>
    </div>
  );
}
