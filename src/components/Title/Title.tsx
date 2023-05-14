import { StyledTitle, TitleOption } from "./styles";

interface TitleProps {
  option: TitleOption;
  text: string;
}

export const Title = ({ option, text }: TitleProps) => {
  return <StyledTitle $option={option}>{text}</StyledTitle>;
};
