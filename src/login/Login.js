import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Dialog from '../components/Dialog';
import Sheet from '../components/Sheet';
import { login } from '../utils/api';

const Input = styled.input`
  margin-bottom: 1em; 
  padding: .2em .5em;
  max-width: 30em;
  min-width: 20em;
  border-radius: 8px;
  margin: 1em;
`;
const Label = styled.label`
  color: #000;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 1em;
`;

const Header = styled.h2`
  color: #000;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 1em;
`;

function Login({ callback }) {

  const username = useRef();
  const password = useRef();

  return (
    <Dialog closing={() => callback({ canceled: true })}>
      <Sheet height='auto' width='auto' onClick={e => e.stopPropagation()}>
        <Header>Sign In!</Header>
        <Label htmlFor='username'>Username</Label>
        <Input type='text' name='username' ref={username} />
        <Label htmlFor='password'>Password</Label>
        <Input type='password' name='password' ref={password} />
        <Button onClick={() => { login(username.current.value, password.current.value, callback); }} text='Sign In' />
      </Sheet>
    </Dialog>
  );
}

export default Login;