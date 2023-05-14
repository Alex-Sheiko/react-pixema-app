import styled from "styled-components";
import { Typography } from "ui";

export type TitleOption = "H1" | "H2" | "H3";

interface TitleProps {
  $option: TitleOption;
}

export const StyledTitle = styled.div`
  ${(props: TitleProps) => Typography[props.$option]};
`;
