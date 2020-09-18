/* eslint-disable prettier/prettier */
import React from 'react';
import ColorContrastBad from './components/ColorContrastBad';
import IntroCard from './components/IntroCard';
import InnerSiteNav from './components/Header_good';
import MorphButton from './components/MorphButton';
import HeaderOrganization from './components/HeaderOrganization';
import Justified from './components/ExcessivelyJustified';

export default function ExamplePage() {
  return (
    <div id="innerWeb">
      <InnerSiteNav />
      <div id="innerMain">
        <IntroCard />
        <ColorContrastBad />
        <MorphButton />
        <HeaderOrganization />
        <Justified />
      </div>
    </div>
  );
}
