import React from 'react';
import taylor from './images/taylor.jpg';
import heather from './images/heather.jpg';
import will from './images/will.jpg';
import sully from './images/sully.jpg';

export default function About() {
  return (
    <main className="about">
      <nav aria-label="breadcrumbs" className="breadcrumbs">
        <span>
          <a className="breadcrumb-links" href="/">
            Home
          </a>
        </span>
        <span> > </span>
        <span>
          <a className="breadcrumb-links" href="/about">
            About
          </a>
        </span>
      </nav>
      <h2>Our Team</h2>
      <section className="bio-container">
        <div className="bio">
          <img src={taylor} alt="Taylor Riley Du" width="250"></img>
          <h3>Taylor Riley Du</h3>
          <h4>Software Engineer</h4>
          <p>
            Taylor has always been passionate about accessibility and spent 5
            years practicing as a pediatric physical therapist before
            transitioning to software engineering. She is a lover of cold brew
            coffee, knitting, sewing, and hiking. She currently resides in her
            hometown of Baltimore with her husband, Robert, and calico cat,
            Frankie.
          </p>
        </div>
        <div className="bio">
          <img src={heather} alt="Heather Friedman" width="250"></img>
          <h3>Heather Friedman</h3>
          <h4>Software Engineer</h4>
          <p>
            Speech-Language Pathologist turned Software Engineer, Heather is
            passionate about making a difference in the world around her.
            Heather enjoys skiing, being outside, playing guitar, snuggling her
            cat, spending time with friends and family, and nerding out about
            fountain pens or covered bridges.
          </p>
        </div>
        <div className="bio">
          <img src={will} alt="Will Hack" width="250"></img>
          <h3>Will Hack</h3>
          <h4>Software Engineer</h4>
          <p>
            An avid coffee drinker and bass player, will is ecstatic to be a
            part of team Equa11y! In his spare time, he can typically found
            watching movies, musicals, or playing games with friends and family.
            He is a proud dog father and soon to be human father!
          </p>
        </div>
        <div className="bio">
          <img src={sully} alt="Tjolanda Sullivan" width="250"></img>
          <h3>Tjolanda Sullivan</h3>
          <h4>Software Engineer</h4>
          <p>
            Disgustingly positive human who is all about making sure everyone
            feels included. Most days, you can find Tjolanda enjoying creative
            activities while filling other days with all things adventure
            related. From traveling the world, to wood working and art. Life is
            about finding your joy.
          </p>
        </div>
      </section>
    </main>
  );
}
