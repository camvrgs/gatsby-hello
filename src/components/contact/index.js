import React from 'react';
import styled from "styled-components"

import Container from '../common/Container';
import ContactForm from './ContactForm';
import { Wrapper, Details } from '../../styles/Contact'

import contactIllustration from '../../assets/undraw_mobile_messages.svg';

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
