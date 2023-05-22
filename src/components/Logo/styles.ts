import styled from "styled-components";
import { Media } from "ui";

export const StyledLogo = styled.img`
  width: 158px;
  height: 40px;
  ${Media.SM} {
    max-width: 147px;
    height: 38px;
  }
`;
