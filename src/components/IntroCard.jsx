/* eslint-disable prettier/prettier */
import React from 'react';
import wally from '../images/wa11y.png';

export default function IntroCard() {
  return (
    <div className="cards">
      <img src={wally} alt="dog with name wally" height="200" width="200"></img>
      <p>
        Hey all! Wa11y the Equa11y dog here! As a reminder, some of your fellow
        humans require assistive technology to use and navigate the internet.
        Here are some common pitfalls developers get themselves into when
        creating websites that make it very challenging for some people to use
        them. Click on each box to toggle between accessible and non-accessible
        versions of the same information so you can see for yourself!
      </p>
    </div>
  );
}
