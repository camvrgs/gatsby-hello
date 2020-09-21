import styled from "styled-components"
import ContentWrapper from "./ContentWrapper"
import { Link } from "gatsby"

export const StyledFooter = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.footerHeight};
  margin-top: 10rem;
`

export const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer-links {
      /* Adjust width of links wrapper accordingly */
      width: 10rem;
      display: flex;
      justify-content: space-between;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 15rem;
      }
    }
  }
`

export const StyledLink = styled(Link)`
  font-size: .90rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: .5px;
`

export const StyledSocialProfile = styled.a`
  width: auto;
  height: auto;
  padding: "0 1.25rem";
  margin: 0 .3rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
    margin-bottom: -0.05rem;
  }
`
