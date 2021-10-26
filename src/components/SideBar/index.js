import React from 'react';
import PropTypes from 'prop-types';
import {
  SidebarContainer,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrapper,
  SidebarRoute,
} from './SidebarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <div onClick={toggle}>
        <CloseIcon sx={{ color: 'white' }} />
      </div>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='me' onClick={toggle}>
            me
          </SidebarLink>
          <SidebarLink to='projects' onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to='education' onClick={toggle}>
            Education
          </SidebarLink>
          <SidebarLink to='letstalk' onClick={toggle}>
            Lets talk!
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrapper>
          <SidebarRoute to='/cv'>cv</SidebarRoute>
        </SideBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

SideBar.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
};

export default SideBar;
