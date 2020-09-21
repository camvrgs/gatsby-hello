import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Header from "../header";
import Container from '../common/Container';

import overlayIllustration from '../../assets/blob.svg';

const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Blurb = styled.div`
  flex: 1 0;
  padding: 2rem;

  @media (max-width: 960px) {
    width: 100%;
    padding: 0 2rem;
    margin-bottom: 1rem;
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

const ImgBlurb = styled(Blurb)`
  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 2rem;
  }
`;

const ImageWrapper = styled(Img)`
  border-radius: 100%;

`;

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "avatars/cameron-vargas.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Blurb>
          <h1>Hello!</h1>
          <h4>My name is Cameron. I'm a web developer.</h4>
        </Blurb>
        <ImgBlurb>
          <ImageWrapper fluid={data.imageOne.childImageSharp.fluid} />
        </ImgBlurb>
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
