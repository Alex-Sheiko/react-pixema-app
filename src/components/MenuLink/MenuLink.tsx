import { ReactNode } from "react";
import { useMatch } from "react-router";
import { StyledNavLink } from "./styles";

interface MenuLinkProps {
  title: string;
  to: string;
  children?: ReactNode;
}

export const MenuLink = ({ children, title, to }: MenuLinkProps) => {
  const isActive = useMatch(to);
  return (
    <StyledNavLink to={to} $isActive={isActive}>
      {children}
      {title}
    </StyledNavLink>
  );
};
