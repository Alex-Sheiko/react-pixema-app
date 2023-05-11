import { Color, Typography } from "ui";
import styled from "styled-components";
import {} from "ui";

export const StyledMenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const LogoutWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  transition: all 0.3s ease-in-out;
  ${Typography.S1}
  color: ${Color.SECONDARY};
  svg {
    width: 24px;
    height: 24px;
    fill: ${Color.SECONDARY};
    transition: all 0.3s ease-in-out;
    line {
      transition: all 0.3s ease-in-out;
      stroke: ${Color.SECONDARY};
    }
  }
  &:hover {
    cursor: pointer;
    color: ${Color.PRIMARY_LIGHT};
    svg {
      fill: ${Color.PRIMARY_LIGHT};
    }
    line {
      stroke: ${Color.PRIMARY_LIGHT};
    }
  }
`;
