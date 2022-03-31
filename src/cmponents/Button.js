import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  padding: .7em 1.5em;
  margin: .6em;
  height: auto;
  background-color: #0A2463;
  color: white;
  border: solid 2px;
  border-radius: 8px;
`;

function Button({ text, onClick }) {
  return (
    <Btn onClick={onClick}>{text}</Btn>
  );
}

export default Button;