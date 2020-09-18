import React, { useState } from 'react';
import { useMorph } from 'react-morph';

export default function Justified() {
  const [toggle, setToggle] = useState(true);

  const morph = useMorph();

  return <div className="cards"></div>;
}
