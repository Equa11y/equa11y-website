import React from "react";
import wa11y from "./images/wa11y.png";

export default function Main() {
  return (
    <div className="main">
      <div id="introduction" class="mainChild">
        <h2>Welcome to Equa11y!</h2>
        <p>
          We believe the internet is for everyone. However, there are many
          groups who find themselves excluded from accessing the web. Our
          mission is to use our skills and abilities to build tools that help
          make the internet a more accessible place.
        </p>
      </div>
      <div id="useSite" class="mainChild">
        <h2>What you'll find...</h2>
        <p>
          Team equa11y is all about sharing our passion for web accessibility.
          If you checkout our transitions page you can take a tour of common
          accessibility errors found on many websites. If you visit our docs
          link, we'll share some great resources with you and connect you to
          some really helpful development tools that can assist you in making
          your applications accessible to most. We also have an about us link
          where you can learn more about the Equa11y team.
        </p>
      </div>
      <div id="accessImportance">
        <h2>Accessibility and why it's important...</h2>
        <p>A medium size note about accessibility and why it's important.</p>
      </div>
      {/* add image here */}
      <div id="image1" class="mainChild">
        <center>
          <p>add image</p>
        </center>
      </div>
      {/* add image here */}
      <div id="wa11yDog" class="mainChild">
        <img
          src={wa11y}
          alt="dog with name equally"
          width="500"
          height="500"
        ></img>
      </div>
      <div id="introWa11y" class="mainChild">
        <h2>This is Wa11y...</h2>
        <p>
          The Equa11y dog. He's here to guide you on your accessibility journey.
        </p>
      </div>
    </div>
  );
}
