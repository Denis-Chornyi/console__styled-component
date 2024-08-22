import Flex from '../flex/Flex';
import { useState } from 'react';
import Line from '../line/Line';
import StyledConsole, { ConsoleProps } from './Console.styled';

const Console: React.FC<ConsoleProps> = ({ color, ...props }) => {
  const [lines, setLines] = useState(['C/users/console>']);

  const onKeyPress = (e: { charCode: number }) => {
    if (e.charCode === 13) {
      setLines([...lines, 'C/users/console>']);
    }
  };

  return (
    <Flex>
      <Flex direction="column" margin="0 10px">
        {lines.map(line => (
          <Line color={color}>{line}</Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
    </Flex>
  );
};

export default Console;
