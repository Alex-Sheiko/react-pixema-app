import styled from "styled-components";
import { Media } from "ui";

export const PageBlock = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  & button {
    align-self: center;
    margin-top: 64px;
    padding: 8px 24px;
    border-radius: 40px;
    ${Media.Md} {
      margin-top: 56px;
    }
    ${Media.Sm} {
      margin-top: 48px;
    }
  }
`;
