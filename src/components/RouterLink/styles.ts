import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography, Color } from "ui";

export const StyledLink = styled(Link)`
  ${Typography.S1};
  color: ${Color.SECONDARY};
  transition: 0.3s color ease-in-out;
  &:hover {
    color: ${Color.PRIMARY_LIGHT};
  }
  &:disabled {
    color: ${Color.GRAPHITE};
  }
`;
