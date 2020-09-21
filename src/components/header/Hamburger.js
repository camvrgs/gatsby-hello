import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 5;
  top: 1.6rem;
  right: 1.8rem;
  display: none;
  cursor: pointer;
  transition: all 400ms cubic-bezier(.37,.13,.6,.87);
  position: absolute;

  @media (max-width: 960px) {
    display: block;
  }

  ${({ sidebar }) =>
    sidebar &&
    `
      right: 18%;
      top: 1.4rem;

      @media (max-width: 960px) {
        right: 35%;
        position: fixed;
      }

      @media (max-width: 600px) {
        right: 45%;
      }
  `}
`;

const Bar = styled.div`
  width: 1.6rem;
  height: .15rem;
  margin-bottom: .3rem;
  background-color: #212121;
  transition: all 400ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  @media (max-width: 600px){
    width: 1.6rem;
  }

  ${({ top, sidebar }) =>
    top && sidebar &&
    `
    transform: translateY(8px) rotate(45deg);
  `}

  ${({ mid, sidebar }) =>
    mid && sidebar &&
    `
    opacity: 0;
    transform: translateX(20px);
  `}

  ${({ bottom, sidebar }) =>
    bottom && sidebar &&
    `
    transform: translateY(-6px) rotate(-45deg);
  `}

`;

const Hamburger = ({ sidebar, setSidebar }) => {

  return (
    <Wrapper sidebar={sidebar} onClick={() => setSidebar(!sidebar)}>
      <Bar top sidebar={sidebar} />
      <Bar mid sidebar={sidebar} />
      <Bar bottom sidebar={sidebar} />
    </Wrapper>
  )
};

export default Hamburger;
