import React from 'react';

const stickyFooter = {
  backgroundColor: '#4C91B8',
  padding: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '60px',
  width: '100%',
};

export default function Footer() {
  return (
    <footer className="footer" style={stickyFooter}>
      <ul className="footer-links" aria-labelledby="contact-links">
        <li>
          <a
            className="contact-links"
            href="https://github.com/oslabs-beta/Equa11y"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="contact-links"
            href="https://www.npmjs.com/package/equa11y"
          >
            npm
          </a>
        </li>
        <li>© 2020 Equa11y</li>
      </ul>
    </footer>
  );
}
