import styled from "styled-components";
import { Media } from "ui";

export const StyledLogo = styled.img`
  max-width: 158px;
  width: 100%;
  height: 40px;
  ${Media.SM} {
    max-width: 147px;
    height: 38px;
  }
`;
