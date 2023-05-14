import { Color } from "ui";
import styled from "styled-components";

export const StyledSwitch = styled.div`
  justify-self: end;
  input {
    display: none;
  }
  & input:checked {
    & ~ label {
      &::before {
        opacity: 1;
      }
      &::after {
        left: 45%;
      }
    }
  }
`;

export const Switcher = styled.div`
  width: 32px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  background: ${Color.SECONDARY};
  position: relative;
  cursor: pointer;
  border-radius: 1.6rem;
  &::after {
    content: "";
    position: absolute;
    left: 3px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${Color.WHITE};
    transition: all 0.4s ease;
  }
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: ${Color.PRIMARY};
    opacity: 0;
    transition: all 0.4s ease;
  }
`;
