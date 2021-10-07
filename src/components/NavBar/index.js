import React from 'react';

import {
  Nav, NavLink, NavMenu,
} from './styles';

function NavBar() {
  return (
    <>
      <Nav>
        <NavLink to='/' />
        <NavMenu>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/playlists'>LISTAS SALVAS</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default NavBar;
