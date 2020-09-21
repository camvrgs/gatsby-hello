import React from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';

const Wrapper = styled.div`
  position: fixed;
  z-index: 4;
  overflow: auto;
  top: 0px;
  right: -275px;
  width: 0;
  opacity: 0;
  height: 100%;
  background-color: '#212121';
  transition: all 400ms cubic-bezier(.37,.13,.6,.87);

  ${({ active }) =>
    active &&
    `
      width: 20%;
      right: 0px;
      opacity: 1;

      @media (max-width: 960px) {
        width: 40%;
      }

      @media (max-width: 600px) {
        width: 50%;
      }
  `}
`;

const Sidebar = ({ sidebar, setSidebar }) => {

  return (
  <Wrapper active={sidebar} onClick={() => setSidebar(!sidebar)}>
    <NavbarLinks />
  </Wrapper>
  )
};

export default Sidebar;
