import styled from "styled-components";
import { Color, Typography } from "ui";

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${Typography.S2};
  color: ${Color.PRIMARY_TEXT};
  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`;
