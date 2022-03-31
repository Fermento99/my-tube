import React, { useState } from 'react';
import styled from 'styled-components';

const Curtain = styled.div`
  position: ${props => props.fullscreen ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: linear-gradient(30deg, #566E3D, #0C4767);
  display: ${props => props.display ? 'flex' : 'none'};
  opacity: ${props => props.opacity};
  justify-content: center;
  align-items: center;

  transition: ease-in-out 1s;
`;

const Title = styled.h1`
  color: white;
  font-family: monospace;
`;



function Splash({ disapear, fullscreen=true }) {
  const [display, setDisplay] = useState(true);
  const [opacity, setOpacity] = useState(1);

  if (disapear && opacity === 1) {
    setOpacity(0);
    setTimeout(() => { setDisplay(false); }, 1000);
  }

  return (
    <Curtain display={display ? 1 : 0} opacity={opacity} fullscreen={fullscreen ? 1 : 0} onClick={e => e.stopPropagation()}>
      <Title>MyTube</Title>
    </Curtain>
  );
}

export default Splash;