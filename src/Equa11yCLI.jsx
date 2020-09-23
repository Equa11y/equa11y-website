import React from 'react';
import equa11y from './images/equa11y.png';
import equa11ypage1 from './images/equa11ypage1.png';
import errortype from './images/errortype.png';
import sublevel from './images/sublevel.png';
import manualtesting from './images/manualtesting.png';

export default function Equa11yCLI() {
  return (
    <div>
      <nav aria-label="breadcrumbs" className="breadcrumbs">
        <span>
          <a className="breadcrumb-links" href="/">
            Home
          </a>
        </span>
        <span className="grain"> {'>'} </span>
        <span>
          <a className="breadcrumb-links">Equa11y CLI</a>
        </span>
      </nav>
      <div className="main">
        <div id="introduction" className="mainChild commandline">
          <h1>
            Equa11y Command Line Tool: An easy to implement axe-core command line testing tool made
            by Software Engineers for Software Engineers
          </h1>
        </div>
        <div className="main-cards">
          <div className="mainChild">
            <h2>What Makes equa11y Different?</h2>
            <p>
              Equa11y was built from the bottom up with Software Engineers in mind. It was created
              to allow Developers to implement accessibility testing during development and into
              their typical development workflow.
            </p>
          </div>
          <div className="mainChild">
            <h2>How To Use</h2>
            <p>
              Simply install our{' '}
              <a href="https://www.npmjs.com/package/equa11y" target="_blank" role="link">
                npm package
              </a>{' '}
              and run npx equa11y to get started. Then input the url of the website you want to
              test. You can use equa11y on either a deployed website or a website hosted locally.
            </p>
          </div>
          <div className="mainChild">
            <h2>equa11y In Action</h2>
            <p>
              When you first run npx equa11y you will be greated by a simple UI. Here you can input
              a deployed or locally hosted website. Note: please include "http://" before any
              deployed website. You can manually test different end points of your application by
              providing it in the url.
            </p>
            <img
              src={equa11y}
              height="600"
              width="900"
              alt="screenshot of command line tool initial page with request for input url"
            ></img>
            <p>
              Once you load a website, you will have access to a dropdown menu in the command line.
              Here you will be able to choose to refresh equa11y to reassess the same url, try a new
              url or quit. You will also have access to information about the accessibility of your
              program broken down into categories based on severity of error. Lastly, you will see
              recommendations for manual tests to perform.
            </p>
            <img
              src={equa11ypage1}
              height="600"
              width="900"
              alt="screenshot of command line tool with types of errors categorized by severity"
            ></img>
            <p>
              You can now easily navigate using the keyboard to each issue type. Click enter to see
              more information. The information included in this sublevel includes a summary of the
              error type.
            </p>
            <img
              src={errortype}
              height="600"
              width="900"
              alt="screenshot of npm pacakge with dropdown menu showing error types"
            ></img>
            <p>
              On this third sublevel, you can see a link to more information about the error, a
              recommendation for fixing the error, along with the html of where the error is located
              in the code base. To access the url for more information, simply navigate to the line
              using your keyboard and press enter.
            </p>
            <img
              src={sublevel}
              height="700"
              width="900"
              alt="screenshot of command line tool with dropdown menu showing url for more information, recommendations for fixing error, and html of error in codebase"
            ></img>
            <p>
              Lastly, you have access to 15 common errors that require manual testing. You can
              navigate through this menu using the keyboard and press enter for each error. You can
              then press enter to be taken to the WCAG guidelines which can provide additional
              information for manual testing of this common accessibility error.
            </p>
            <img
              src={manualtesting}
              height="800"
              width="900"
              alt="screenshot of command line tool with dropdown menu showing manual testing recommendations and url to find more information"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
