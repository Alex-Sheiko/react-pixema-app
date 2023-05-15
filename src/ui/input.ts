import styled from "styled-components";
import { Media, Color } from "ui";

export const Input = styled.input<{ $error?: boolean }>`
  padding: 16px;
  padding-left: 20px;
  background-color: ${Color.SECONDARY_BG};
  border: 2px solid transparent;
  border-radius: 10px;
  color: ${Color.PRIMARY_TEXT};
  border-color: ${({ $error }) => $error && Color.ERROR};
  &::placeholder {
    color: ${Color.SECONDARY};
  }
  &:focus {
    border-color: ${Color.PRIMARY};
  }
  &:disabled {
    background-color: ${Color.SECONDARY};
    &::placeholder {
      color: ${Color.LIGHT};
    }
  }
  html[theme="light"] & {
    border: 2px solid ${Color.LIGHT};
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
  ::-webkit-search-cancel-button {
    display: none;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${Media.SM} {
    gap: 20px;
  }
`;
