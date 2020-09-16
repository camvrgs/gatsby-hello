import React, { useState } from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
      display: block;
      z-index: 4;
  `}
`;

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => setSidebar(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </Wrapper>
  );
};

export default Header;
