import { ROUTE } from "router";
import { RouterLink } from "components";
import { StyledLogo } from "./styles";
import { logoDark, logoLight } from "assets";
import { getTheme, useAppSelector } from "store";

export const Logo = () => {
  const { theme } = useAppSelector(getTheme);
  return (
    <RouterLink to={ROUTE.HOME}>
      <StyledLogo src={theme === "dark" ? logoDark : logoLight} alt="Pixema" />
    </RouterLink>
  );
};
