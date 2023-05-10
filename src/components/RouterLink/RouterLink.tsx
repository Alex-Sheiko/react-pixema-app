import { ReactNode } from "react";
import { StyledLink } from "./styles";

interface RouterLinkProps {
  to: string;
  children: ReactNode;
}

export const RouterLink = ({ to, children }: RouterLinkProps) => {
  return (
    <StyledLink to={to} relative="route">
      {children}
    </StyledLink>
  );
};
