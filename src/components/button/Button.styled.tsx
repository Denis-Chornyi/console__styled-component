import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  children: ReactNode;
  align?: string;
  outlined?: boolean;
  color?: string;
  background?: string;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  align-self: ${({ align }) => align || 'stretch'};

  &:focus {
    outline: none;
  }

  &: hover {
    border-color: #af0;
    color: #af0;
  }

  ${props =>
    props.outlined &&
    css<ButtonProps>`
      color: ${props => props.color || props.theme.colors.primary};
      border: 1px solid ${props => props.color || 'white'};
      background: transparent;
    `}
`;

export default StyledButton;
