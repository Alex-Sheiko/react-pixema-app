import React from "react";
import { StyledSideBar, Copyright } from "./styles";
import { Logo, MenuNav } from "components";

export const SideBar = () => {
  return (
    <StyledSideBar>
      <Logo />
      <MenuNav />
      <Copyright>© All Rights Reserved</Copyright>
    </StyledSideBar>
  );
};
