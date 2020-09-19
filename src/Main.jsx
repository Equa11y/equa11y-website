import React from 'react';
import wa11y from './images/wa11y.png';
import Chart from './PieChart.jsx';

export default function Main() {
  return (
    <div className="main">
      <div id="introduction" className="mainChild">
        <h2>Welcome to Equa11y!</h2>
        <h4>
          We believe the internet is for everyone. However, there are many groups who find
          themselves excluded from accessing the web. Our mission is to use our skills and abilities
          to build tools that help make the internet a more accessible place.
        </h4>
      </div>
      <div className="main-cards">
        <div id="useSite" className="mainChild">
          <h3>What you'll find...</h3>
          <p>
            Team equa11y is all about sharing our passion for web accessibility. If you checkout our
            transitions page you can take a tour of common accessibility errors found on many
            websites. If you visit our docs link, we'll share some great resources with you and
            connect you to some really helpful development tools that can assist you in making your
            applications accessible to most. We also have an about us link where you can learn more
            about the Equa11y team.
          </p>
        </div>
        <div id="accessImportance">
          <h3>Accessibility and why it's important...</h3>
          <p>A medium size note about accessibility and why it's important.</p>
          <Chart />
        </div>
      </div>
      <div id="wa11yDog" className="mainChild">
        <div id="introWa11y" className="mainChild">
          <h3>This is Wa11y...</h3>
          <p>The Equa11y dog. He's here to guide you on your accessibility journey.</p>
        </div>
        <img src={wa11y} alt="dog with name wally" width="500" height="500"></img>
      </div>
    </div>
  );
}
