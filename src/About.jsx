import React from 'react';
import wa11y from './images/wa11y.jpg';

export default function About() {
  return (
    <main>
      <nav aria-label="breadcrumbs" className="breadcrumbs">
        <span>
          <a className="breadcrumb-links" href="/">
            Home
          </a>
        </span>
        <span> > </span>
        <span>
          <a className="breadcrumb-links" href="/About/">
            About
          </a>
        </span>
      </nav>
      <h2>Our Team</h2>
      <section className="bio-container">
        <div>
          <img
            src={wa11y}
            alt="dog with name equally"
            width="250"
            height="150"
          ></img>
          <h3>Taylor Riley Du</h3>
          <h4>Software Engineer</h4>
          <p>Insert bio here.</p>
        </div>
        <div>
          <img
            src={wa11y}
            alt="dog with name equally"
            width="250"
            height="150"
          ></img>
          <h3>Heather Friedman</h3>
          <h4>Software Engineer</h4>
          <p>Insert bio here.</p>
        </div>
        <div>
          <img
            src={wa11y}
            alt="dog with name equally"
            width="250"
            height="150"
          ></img>
          <h3>Will Hack</h3>
          <h4>Software Engineer</h4>
          <p>Insert bio here.</p>
        </div>
        <div>
          <img
            src={wa11y}
            alt="dog with name equally"
            width="250"
            height="150"
          ></img>
          <h3>Tjolanda Sullivan</h3>
          <h4>Software Engineer</h4>
          <p>Insert bio here.</p>
        </div>
      </section>
    </main>
  );
}
