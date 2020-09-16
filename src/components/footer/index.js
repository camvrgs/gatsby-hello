import React from "react"
import styled from "styled-components"
import footerIllustration from '../../assets/wave.svg';

import { StyledFooter, StyledContentWrapper, StyledLink, StyledSocialProfile } from '../../styles/Footer';
import config from "../../config";

const { socialMedia } = config;

const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 8rem 0 4rem;
  }
`;

const Flex = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  }
`;

const Footer = () => (
  <Wrapper>
    <StyledFooter>
      <StyledContentWrapper>
        <Flex>
          <div>
            <h3>Cameron Vargas</h3>
            <span>© All rights reserved 2020</span>
          </div>
          <StyledLink to="/" aria-label="home">
            Home
          </StyledLink>
          <Social>
            {socialMedia.map(({ name, url, icon }, key) => {
              return (
                <StyledSocialProfile
                  key={key}
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Follow me on ${name}`}
                >
                  <img width="24" src={icon} alt={name} />
                </StyledSocialProfile>
              )
            })}
          </Social>
        </Flex>
      </StyledContentWrapper>
    </StyledFooter>
   </Wrapper>
)

export default Footer
