import React from 'react';
import styled from "styled-components"

import Container from '../common/Container';
import ContactForm from './ContactForm';

import contactIllustration from '../../assets/undraw_mobile_messages.svg';


const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
    order: 1;
  }

  h1 {
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

const Image = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;

const StyledHeader = styled.div`
  h2 {
    color: #0f62fe;
  }
`;

const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Image>
      <img src={contactIllustration} alt="Contact me!" />
    </Image>
    <Details>
      <StyledHeader>
        <h2>Contact Me</h2>
      </StyledHeader>
      <ContactForm />
    </Details>
  </Wrapper>
);

export default Contact;
