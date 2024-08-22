import StyledTitle, { TitleProps } from "./Title.styled";


const Title: React.FC<TitleProps> = ({ children, ...rest }) => {
  return <StyledTitle {...rest}>{children}</StyledTitle>;
};

export default Title;
