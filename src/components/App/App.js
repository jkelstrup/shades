// Dependencies
import React from 'react';
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

  return (
    <CenterCenter>
      <ShadesCollection/>
      <ShadesCollection/>
      <ShadesCollection/>
      <ShadesCollection/>
      <ShadesCollection/>
    </CenterCenter>
  );
};
