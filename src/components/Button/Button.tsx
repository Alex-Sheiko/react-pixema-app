import { StyledButton } from "./styles";

export type ButtonOption = "primary" | "secondary";

type TypeButton = "button" | "submit" | "reset";

interface ButtonProps {
  text: string;
  option: ButtonOption;
  onClick?: () => void;
  type?: TypeButton;
}

export const Button = ({ text, option, onClick, type }: ButtonProps) => {
  return (
    <StyledButton $option={option} onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};
