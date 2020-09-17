/* eslint-disable prettier/prettier */
import React from 'react';
import wa11y from './images/wa11y.jpg';

export default function NavBar() {
  return (
    <div className="navbar">
      {/* this will be a button to the home page */}
      <img
        src={wa11y}
        alt="dog with name equally"
        width="250"
        height="150"
      ></img>
      <h1>Equa11y</h1>
    </div>
  );
}
