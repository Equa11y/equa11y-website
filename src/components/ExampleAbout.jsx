/* eslint-disable prettier/prettier */
import React from 'react';
import PieChartThirty from './ThirtyPercentPie';

export default function ExampleAbout() {
  return (
    <div className="about-example-page ">
      <div className="cards-big">
        <p>
          As you can see in these seven different examples, accessibility is so important. Making
          your websites accessible helps reach wider user audiences, as well as improve use of the
          site for the general population. If you are interested in seeing more examples, please
          check out{' '}
          <a
            href="https://alphagov.github.io/accessibility-tool-audit/test-cases.html"
            role="link"
            target="_blank"
          >
            "The World's Least Accessible Website"
          </a>
          which was built to allow researchers to see how well automated accessiblity tools locate
          accessibility errors for developers. Surprisingly automated tools catch only abour 30% of
          errors, which is why it is imperative that developers are educated and try to create
          accessible websites.
        </p>
        <div>
          <PieChartThirty />
        </div>
      </div>
    </div>
  );
}
