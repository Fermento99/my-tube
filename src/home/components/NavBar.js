import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../cmponents/Button';
import Login from '../../login/Login';
import { loginAnon } from '../../utils/api';
import Keys from '../../utils/storageKeys';
import { getLocalStorageItem } from '../../utils/utils';

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
`;

function NavBar() {
  const [login, setLogin] = useState(false);
  const user = getLocalStorageItem(Keys['USER']);

  return (
    <Nav>
      <h3>Logged in as <em>{user.UserName || user.FullName}</em></h3>
      <Button text="Log In" onClick={() => setLogin(true)} />
      {login && <Login callback={(e) => {
        setLogin(false);
        console.log(login);
        if (e.err) {
          loginAnon(setLogin);
        }
      }} />}
    </Nav>
  );
}

export default NavBar;