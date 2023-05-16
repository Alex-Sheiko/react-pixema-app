import { BurgerMenu, FilterMenu, Logo, Profile, Search } from "components";
import { useDebounce, useInput, useToggle, useWindowSize } from "hooks";
import { StyledHeader } from "./styles";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { getUser, useAppSelector } from "store";

export const Header = () => {
  const { width } = useWindowSize();
  const search = useInput();
  const navigate = useNavigate();
  const debounceValue = useDebounce(search.value, 1000);
  const [isActive, toogleFilter] = useToggle();

  useEffect(() => {
    debounceValue && navigate(generatePath(ROUTE.SEARCH, { name: debounceValue }));
    //eslint-disable-next-line
  }, [debounceValue]);
  const { isAuth, name, email } = useAppSelector(getUser);
  return (
    <StyledHeader>
      {width && width <= 1280 && <Logo />}
      <Search {...search} onClick={toogleFilter} />
      {width && width >= 1281 ? (
        <Profile name={name || ""} email={email || ""} isAuth={isAuth} />
      ) : (
        <BurgerMenu />
      )}
      <AnimatePresence>{isActive && <FilterMenu toogleFilter={toogleFilter} />}</AnimatePresence>
    </StyledHeader>
  );
};
