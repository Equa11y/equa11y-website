/* eslint-disable prettier/prettier */
import React from 'react';
import ColorContrast from './components/ColorContrast';
import IntroCard from './components/IntroCard';
import InnerSiteNav from './components/Header_good';

export default function ExamplePage() {
  return (
    <div>
      <div id="innerWeb">
        <InnerSiteNav />
      </div>
      <div id="innerMain">
        <IntroCard />
        <ColorContrast />
      </div>
    </div>
  );
}
