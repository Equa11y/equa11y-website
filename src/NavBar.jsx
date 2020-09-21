/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import wa11y from './images/wa11y.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="navbar">
      <Link to="/">
        <button className="wally" role="button">
          <img src={wa11y} alt="dog with name wally" width="100" height="100"></img>
        </button>
      </Link>

      <div className="title">Equa11y</div>
      <div className="dropdown">
        <button onClick={() => setIsClicked(!isClicked)} className="dropbtn">
          Menu
        </button>
        {isClicked && (
          <div className="dropdown-content">
            <Link to="/example">
              <button onClick={() => setIsClicked(false)} className="content">
                <div>Example Page</div>
              </button>
            </Link>
            <Link to="links">
              <button onClick={() => setIsClicked(false)} className="content">
                <div>Useful Links</div>
              </button>
            </Link>
            <Link to="about">
              <button onClick={() => setIsClicked(false)} className="content">
                <div>About</div>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
