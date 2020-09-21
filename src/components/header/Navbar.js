import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Container from '../common/Container';
import NavbarLinks from './NavbarLinks';

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.a`
  color: '#fff';
  font-weight: 500;

  @media (max-width: 960px) {
    mix-blend-mode: 'difference';
  }
`;

const Navbar = () => {
  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" >
        Cameron Vargas
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
