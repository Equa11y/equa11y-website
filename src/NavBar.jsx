/* eslint-disable prettier/prettier */
import React from 'react';
import wa11y from './images/wa11y.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <button className="wally" role="button">
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
            <button className="content">
              <div>Example Page</div>
            </button>
          </Link>
          <Link to="links">
            <button className="content">
              <div>Useful Links</div>
            </button>
          </Link>
          <Link to="about">
            <button className="content">
              <div>About</div>
            </button>
          </Link>
          <Link to="/">
            <button className="content">
              <div>Home</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
