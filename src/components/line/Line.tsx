import StyledLine, { LineProps } from "./Line.styled";


const Line: React.FC<LineProps> = rest => {
  return <StyledLine {...rest}></StyledLine>;
};

export default Line;
