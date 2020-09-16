import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 15.625rem;
  height: 3rem;
  background-color: ${({ theme, color }) => theme.colors[color] || "#0F0F0F"};
  color: ${({ theme, textColor }) => theme.buttons.textColors[textColor] || "#0F0F0F"};
  padding: 1rem;
  margin: 0 ${({ center }) => center ? "auto" : "0"};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: ${({ theme }) => theme.buttons.borderRadius};
  text-decoration: none;
  text-align: ${({ textAlign }) => textAlign ? textAlign : "left"};
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: .3rem;
    margin-bottom: -.175rem;
  }
`

const Button = ({onClick, color, textColor, textAlign, center, props, children}) => (
  <StyledButton
    onClick={onClick}
    color={color}
    textColor={textColor}
    textAlign={textAlign}
    center={center}
    {...props}
   >
    {children}
  </StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  textColor: PropTypes.string,
  textAlign: PropTypes.string,
  center: PropTypes.bool,
}

Button.defaultProps = {
  color: "secondary",
  textColor: "light",
  textAlign: "center",
  center: true,
}

export default Button
