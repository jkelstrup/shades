// Dependencies
import React, { useState } from 'react';
import styled from 'styled-components/macro';

import ShadesCollection from 'components/ShadesCollection/ShadesCollection';

const CenterCenter = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default function App(props) {
  const [ numOfColors, setNumOfColors ] = useState(3);

  function renderShadesCollections(x) {
    const collections = [];
    for (let i = 0; i < x; i++) {
        collections.push(<ShadesCollection/>);
    }
    return collections;
  }

  return (
    <>
      <select id="lang" onChange={ (event) => setNumOfColors(event.target.value) } value={ numOfColors }>
        <option value="1">Show 1 color</option>
        <option value="2">Show 2 colors</option>
        <option value="3">Show 3 colors</option>
        <option value="4">Show 4 colors</option>
        <option value="5">Show 5 colors</option>
        <option value="6">Show 6 colors</option>
      </select>
      <CenterCenter>
        { renderShadesCollections(numOfColors) }
      </CenterCenter>
    </>
  );
};
