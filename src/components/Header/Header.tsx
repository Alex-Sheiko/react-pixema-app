import { BurgerMenu, FilterMenu, Logo, Search } from "components";
import { useDebounce, useInput, useToggle } from "hooks";
import { StyledHeader } from "./styles";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "router";

export const Header = () => {
  const search = useInput();
  const navigate = useNavigate();
  const debounceValue = useDebounce(search.value, 1000);
  const [isActive, toogleFilter] = useToggle();

  useEffect(() => {
    debounceValue && navigate(generatePath(ROUTE.SEARCH, { name: debounceValue }));
    //eslint-disable-next-line
  }, [debounceValue]);

  return (
    <StyledHeader>
      <Logo />
      <Search {...search} onClick={toogleFilter} />
      <BurgerMenu />
      <AnimatePresence>{isActive && <FilterMenu toogleFilter={toogleFilter} />}</AnimatePresence>
    </StyledHeader>
  );
};
