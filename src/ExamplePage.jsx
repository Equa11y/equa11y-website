/* eslint-disable prettier/prettier */
import React from 'react';
import ColorContrastBad from './components/ColorContrastBad';
import IntroCard from './components/IntroCard';
import InnerSiteNav from './components/Header_good';
import MorphReferBy from './components/MorphReferBy';

export default function ExamplePage() {
  return (
    <div id="innerWeb">
       <InnerSiteNav /> 
      <div id="innerMain">
        <IntroCard />
        <ColorContrastBad />
        <MorphReferBy />
      </div>
    </div>
      
  );
}




