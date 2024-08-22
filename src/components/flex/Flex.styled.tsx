import styled from 'styled-components';
import { ReactNode } from 'react';

export interface FlexProps {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  children?: ReactNode;
  [key: string]: any;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'rov'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${({ margin }) => margin || '0'};
`;

export default StyledFlex;
