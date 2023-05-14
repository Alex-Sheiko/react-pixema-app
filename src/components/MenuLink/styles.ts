import styled from "styled-components";
import { Color, Typography } from "ui";
import { NavLink, PathMatch } from "react-router-dom";

export const StyledNavLink = styled(NavLink)<{ $isActive: PathMatch<string> | null }>`
  display: flex;
  gap: 20px;
  color: ${({ $isActive }) => ($isActive ? Color.PRIMARY : Color.SECONDARY)};
  transition: 0.3s all ease-in-out;
  ${Typography.S1};
  path {
    fill: ${({ $isActive }) => ($isActive ? Color.PRIMARY : Color.SECONDARY)};
    transition: 0.3s all ease-in-out;
  }
  &:hover {
    color: ${Color.PRIMARY_LIGHT};
    path {
      fill: ${Color.PRIMARY_LIGHT};
    }
  }
  &:disabled {
    color: ${Color.GRAPHITE};
    path {
      fill: ${Color.GRAPHITE};
    }
  }
`;
