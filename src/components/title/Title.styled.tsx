import styled from 'styled-components';
import { ReactNode } from 'react';

export interface TitleProps {
  children: ReactNode;
  [key: string]: ReactNode;
}

const StyledTitle = styled.h1`
  color: ${props => props.color || props.theme.colors.primary};
`;

export default StyledTitle;
