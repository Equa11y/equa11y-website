import React from 'react';
import wa11y from './images/wa11y.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <button className="wally" role="button">
            <img src={wa11y} alt="dog with name wally" width="100" height="100"></img>
          </button>
        </Link>
        <div className="title">Equa11y</div>
      </div>
      <div className="dropdown navbar">
        <Link to="/">
          <button className="content">
            <div>Home Page</div>
          </button>
        </Link>
        <Link to="/example">
          <button className="content">
            <div>Example Page</div>
          </button>
        </Link>
        <Link to="/links">
          <button className="content">
            <div>Useful Links</div>
          </button>
        </Link>
        <Link to="/about">
          <button className="content">
            <div>About Us</div>
          </button>
        </Link>
        <Link to="/equa11ycli">
          <button className="content">
            <div>Equa11y CLI</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
