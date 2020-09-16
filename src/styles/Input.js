import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledInput = styled.input`
  color: ${({ theme, color }) => theme.inputs.textColors[color] || "#0F0F0F"};
  margin: 0 ${({ center }) => center ? "auto" : "0"};
  margin-bottom: 0.5rem;
  padding: 0.8rem 1rem;
  width: 100%;
  box-sizing: border-box;
  border-width: ${({ theme }) => theme.inputs.border.width};
  border-style: ${({ theme }) => theme.inputs.border.style};
  border-color: ${({ theme }) => theme.inputs.border.colors.valid};
  border-radius: ${({ theme }) => theme.inputs.border.radius};
  text-align: ${({ textAlign }) => textAlign ? textAlign : "left"};
  transition: 0.3s;             <-

  ${({ error }) =>
    error &&
    `
    border-color: ${({ theme }) => theme.inputs.border.colors.error};
  `}

  &::placeholder {
    color: ${({ theme }) => theme.inputs.textColors.placeholder};
  }
`;

const Input = ({onChange, color, textAlign, center, props, children}) => (
  <StyledInput
    onChange={onChange}
    color={color}
    textAlign={textAlign}
    center={center}
    {...props}
  >
    {children}
  </StyledInput>
)

Input.propTypes = {
  onChange: PropTypes.func,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  center: PropTypes.bool,
}

export default Input
