import styled from "styled-components";
import { ButtonOption } from "./Button";
import { Color, Typography } from "ui";

interface ButtonProps {
  $option: ButtonOption;
}

export const StyledButton = styled.button`
  border-radius: 10px;
  border: none;
  padding: 15px 60px 15px;
  background-color: ${(props: ButtonProps) =>
    props.$option === "primary" ? Color.PRIMARY : Color.GRAPHITE};
  color: ${Color.WHITE};
  transition: 0.3s all ease-in-out;
  ${Typography.S3};

  &:hover {
    background-color: ${(props: ButtonProps) => props.$option === "primary" && Color.PRIMARY_LIGHT};
    color: ${(props: ButtonProps) => props.$option === "secondary" && Color.LIGHT};
    cursor: pointer;
  }
  &:disabled {
    background-color: ${Color.SECONDARY};
    color: ${Color.LIGHT};
  }
`;
