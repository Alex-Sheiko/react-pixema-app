import styled from "styled-components";
import { Media } from "ui";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-areas: "search burger";
  gap: 40px;
  align-items: center;
  ${Media.LG} {
    grid-template-columns: 1fr 3fr 56px;
    grid-template-areas: "logo search burger";
  }
  ${Media.MD} {
    grid-template-areas: "logo search burger";
  }
  ${Media.SM} {
    grid-template-areas:
      "logo logo burger"
      "search search search";
  }
`;
