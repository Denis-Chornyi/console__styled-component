import styled from 'styled-components';

export interface ConsoleProps {
  color?: string;
}

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background-color: #000;
  font-size: 24px;
  border: none;
  color: ${props => props.color || props.theme.colors.primary};

  &:focus {
    outline: none;
  }
`;

export default StyledConsole;
