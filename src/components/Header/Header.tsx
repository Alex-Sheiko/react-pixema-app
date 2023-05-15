import { BurgerMenu, FilterMenu, Logo, Search } from "components";
import { useInput, useToggle } from "hooks";
import { StyledHeader } from "./styles";
import { AnimatePresence } from "framer-motion";

export const Header = () => {
  const search = useInput();
  const [isActive, toogleFilter] = useToggle();

  return (
    <StyledHeader>
      <Logo />
      <Search {...search} onClick={toogleFilter} />
      <BurgerMenu />
      <AnimatePresence>{isActive && <FilterMenu toogleFilter={toogleFilter} />}</AnimatePresence>
    </StyledHeader>
  );
};
