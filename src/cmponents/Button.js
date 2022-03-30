import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  padding: .7em 1.5em;
  margin: .2em;
  height: auto;
  background-color: #b9a44c;
  border: solid 2px;
  border-radius: 8px;
`;

function Button({ text }) {
  return (
    <Btn>{text}</Btn>
  );
}

export default Button;