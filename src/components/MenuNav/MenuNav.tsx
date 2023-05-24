import { BookMarkIcon, FireIcon, HomeIcon, LogoutIcon, SettingsIcon, SignInIcon } from "assets";
import { MenuLink } from "components";
import { ROUTE } from "router";
import { LogoutWrapper, StyledMenuNav } from "./styles";
import { getUser, useAppDispatch, useAppSelector, userSignOut } from "store";

interface MenuNavProps {
  burger?: boolean;
}

export const MenuNav = ({ burger }: MenuNavProps) => {
  const { isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const handleLogout = () => dispatch(userSignOut());
  return (
    <StyledMenuNav>
      <MenuLink title="Home" to={ROUTE.HOME}>
        <HomeIcon />
      </MenuLink>
      <MenuLink title="Trends" to={ROUTE.HOME + ROUTE.TRENDS}>
        <FireIcon />
      </MenuLink>
      {isAuth && (
        <>
          <MenuLink title="Favorites" to={ROUTE.HOME + ROUTE.FAVORITES}>
            <BookMarkIcon />
          </MenuLink>
          <MenuLink title="Settings" to={ROUTE.HOME + ROUTE.SETTINGS}>
            <SettingsIcon />
          </MenuLink>
          {burger && (
            <LogoutWrapper onClick={handleLogout}>
              <LogoutIcon />
              Logout
            </LogoutWrapper>
          )}
        </>
      )}
      {burger && !isAuth && (
        <MenuLink title="Sign in" to={ROUTE.HOME + ROUTE.LOGIN}>
          <SignInIcon />
        </MenuLink>
      )}
    </StyledMenuNav>
  );
};
