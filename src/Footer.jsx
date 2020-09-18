/* eslint-disable prettier/prettier */
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" id="footer-style">
      <ul className="footer-links" aria-labelledby="contact-links">
        <li>
          <a
            className="contact-links"
            href="https://github.com/oslabs-beta/Equa11y"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="contact-links"
            href="https://www.npmjs.com/package/equa11y"
            target="_blank"
          >
            npm
          </a>
        </li>
        <li>© 2020 Equa11y</li>
      </ul>
    </footer>
  );
}
