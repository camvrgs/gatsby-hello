import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: #000;
    text-decoration: none;
    font-weight: 500;

    @media (max-width: 960px) {
      color: '#fff';
    }
  }

  ${({ desktop }) =>
    desktop ? `
      align-items: center;
      display: flex;

      @media (max-width: 960px) {
          display: none;
      }

      a {
          margin-right: 1rem;

          &:last-child {
              margin-right: unset;
          }
      }
    `
      : `
      padding: 3rem;
      display: flex;
      flex-direction: column;

      a {
          margin-bottom: 1rem;

          &:last-child {
              margin-bottom: unset;
          }
      }
  `}
`;

const NavbarLinks = ({ desktop }) => {

  return (
    <Wrapper desktop={desktop} >
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </Wrapper>
  )

};

export default NavbarLinks;
