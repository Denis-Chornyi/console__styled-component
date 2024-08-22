import styled from 'styled-components';
import Title from './components/title/Title';
import Flex from './components/flex/Flex';
import Console from './components/consoleBoard/Console';
import Button from './components/button/Button';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background: #000;
  color: #0f0;
`;

const App = () => {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color="#0f0">Console cmd 2024</Title>
      </Flex>
      <Flex direction="column" margin="10px 0">
        <Console color="#0f0" />
        <Button outlined color="#0f0" align="flex-end">
          Send
        </Button>
      </Flex>
    </AppWrapper>
  );
};

export default App;
