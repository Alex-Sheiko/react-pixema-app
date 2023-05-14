import { BookMarkIcon, FireIcon, HomeIcon, LogoutIcon, SettingsIcon, SignInIcon } from "assets";
import { MenuLink } from "components";
import { ROUTE } from "router";
import { LogoutWrapper, StyledMenuNav } from "./styles";

interface MenuNavProps {
  burger?: boolean;
}

export const MenuNav = ({ burger }: MenuNavProps) => {
  return (
    <StyledMenuNav>
      <MenuLink title="Home" to={ROUTE.HOME}>
        <HomeIcon />
      </MenuLink>
      <MenuLink title="Trends" to={ROUTE.HOME + ROUTE.TRENDS}>
        <FireIcon />
      </MenuLink>
      <>
        <MenuLink title="Favorites" to={ROUTE.HOME + ROUTE.FAVORITES}>
          <BookMarkIcon />
        </MenuLink>
        <MenuLink title="Settings" to={ROUTE.HOME + ROUTE.SETTINGS}>
          <SettingsIcon />
        </MenuLink>
        <LogoutWrapper>
          <LogoutIcon />
          Logout
        </LogoutWrapper>
      </>
      <MenuLink title="Sign in" to={ROUTE.HOME + ROUTE.LOGIN}>
        <SignInIcon />
      </MenuLink>
    </StyledMenuNav>
  );
};
