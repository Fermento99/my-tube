import React from 'react';
import styled from 'styled-components';
import Button from '../../cmponents/Button';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  background: #FA7921;
  color: #eee;
  width: 100%;
  padding: .2em 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`

function NavBar({ user }) {
  return (
    <Nav>
      <h3>Logged in as <em>{user.UserName}</em></h3>
      <Button text="Log In" />
    </Nav>
  );
}

export default NavBar;