import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from './NavBarElements';

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>me</NavLogo>
          <MobileIcon onClick={toggle}>
            <MenuIcon />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to='me'>me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='projects'>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='education'>Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='letstalk'>Lets talk!</NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

NavBar.propTypes = {
  toggle: PropTypes.func,
};

export default NavBar;
