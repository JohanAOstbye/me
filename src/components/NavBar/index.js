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
          <NavLogo
            to='home'
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            me
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <MenuIcon />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to='me'
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='education'
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Education
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Extra links
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='letstalk'
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Lets talk!
              </NavLink>
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
