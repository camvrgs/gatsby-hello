import React from 'react';
import styled from 'styled-components';

import Header from "../header"
import Container from '../common/Container';

import overlayIllustration from '../../assets/blob.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: '#212121';

    @media (max-width: 960px) {
      mix-blend-mode: 'unset';
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: '#707070';

    @media (max-width: 960px) {
      mix-blend-mode: 'unset';
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;


const Intro = () => {
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <h1>Hello!</h1>
          <h4>My name is Cameron. I'm a web developer.</h4>
        </Details>
        <Details>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
