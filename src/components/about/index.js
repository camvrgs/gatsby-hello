import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Container from '../common/Container';

const Wrapper = styled.div`
  padding: 4rem 0;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: "#e6e9ee";

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

  h2 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

const About = () => {

  return (
    <Wrapper as={Container} id="about">
      <Blurb>
        <h2>More about me</h2>
        <p>Here is some content that should be injected with an mdx.</p>
      </Blurb>
    </Wrapper>
  );
};

export default About;
