import React from 'react';

import {
  Nav, NavLink, NavMenu,
} from './styles';

function NavBar() {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='playlists'>PLAYLISTS</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default NavBar;
