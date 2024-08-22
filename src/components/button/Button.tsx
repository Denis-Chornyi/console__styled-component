import StyledButton, { ButtonProps } from './Button.styled';

const Button: React.FC<ButtonProps> = ({ children, align, ...rest }) => {
  return (
    <StyledButton align={align} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
