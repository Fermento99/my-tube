import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../cmponents/Button';
import Dialog from '../cmponents/Dialog';
import Sheet from '../cmponents/Sheet';
import { login } from '../utils/api';

const Input = styled.input`
  margin-bottom: 1em; 
`;
const Label = styled.label`
  color: #000;
`;

function Login({ callback }) {

  const username = useRef();
  const password = useRef();

  return (
    <Dialog closing={() => callback({ canceled: true })}>
      <Sheet height='20em' width='20em' onClick={e => e.stopPropagation()}>
        <Label htmlFor='username'>Username</Label>
        <Input type='text' name='username' ref={username} />
        <Label htmlFor='password'>Password</Label>
        <Input type='password' name='password' ref={password} />
        <Button onClick={() => { login(username.current.value, password.current.value, callback); }} text='Log In' />
      </Sheet>
    </Dialog>
  );
}

export default Login;