import { ReactNode } from 'react';
import styled from 'styled-components';

export interface LineProps {
  children: ReactNode;
  color?: string;
}

const StyledLine = styled.div`
  font-size: 24px;
  color: ${props => props.color || props.theme.colors.primary};
`;

export default StyledLine