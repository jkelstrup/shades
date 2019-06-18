// Dependencies
import React, { useState } from 'react';

// Components
// import ColBox from 'src/components/Box/ColBox';
// import RowBox from 'src/components/Box/RowBox';
import ShadesDisplay from 'components/ShadesDisplay/ShadesDisplay';
import ColorName from 'components/ColorName/ColorName';


function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}




export default function ShadesCollection(props) {
  const [ baseH, setBaseH ] = useState(randomBetween(0,360));
  const [ baseS, setBaseS ] = useState(randomBetween(10,90));
  const [ baseL, setBaseL ] = useState(randomBetween(30,70));



  return (
    <div style={{display: "flex", flexDirection: "column", margin: "20px"}}>
      <ColorName h={ baseH } s={ baseS } l={ baseL }/>
      <ShadesDisplay baseHSL={{h: baseH, s: baseS, l: baseL}}/>
      <div style={{display: "flex", flexDirection: "column", marginBottom: "40px"}}>
        <pre>H: {baseH} { baseS === 0 && "(No effect)"}</pre>
        <input type="range" min={0} max={360} step={1} value={ baseH } onChange={ (event) => setBaseH(+event.target.value) }/>
        <pre>S: {baseS}</pre>
        <input type="range" min={0} max={100} step={1} value={ baseS } onChange={ (event) => setBaseS(+event.target.value) }/>
        <pre>L: {baseL}</pre>
        <input type="range" min={9} max={96} step={1} value={ baseL } onChange={ (event) => setBaseL(+event.target.value) }/>
      </div>
    </div>
  );
};
