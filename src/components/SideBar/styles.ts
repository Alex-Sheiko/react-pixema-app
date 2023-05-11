import styled from "styled-components";
import { Color, Typography } from "ui";

export const StyledSideBar = styled.aside`
  display: grid;
  grid-template-rows: 40px 1fr 24px;
  grid-row-gap: 64px;
`;

export const Copyright = styled.p`
  ${Typography.B1};
  color: ${Color.LIGHT};
  align-self: center;
`;
