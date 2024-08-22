import StyledFlex, { FlexProps } from './Flex.styled';

const Flex: React.FC<FlexProps> = ({ children, ...rest }) => {
  return <StyledFlex {...rest}>{children}</StyledFlex>;
};

export default Flex;
