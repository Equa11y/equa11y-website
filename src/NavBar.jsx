/* eslint-disable prettier/prettier */
import React from 'react';
import wa11y from './images/wa11y.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <button className="wally">
          <img
            src={wa11y}
            alt="dog with name equally"
            width="100"
            height="100"
          ></img>
        </button>
      </Link>

      <div className="title">Equa11y</div>
      <div className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
          <Link to="/example">
            <div>Example Page</div>
          </Link>

          <Link to="docs">
            <div>Docs</div>
          </Link>
          <Link to="links">
            <div>Useful Links</div>
          </Link>
          <Link to="about">
            <div>About</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
