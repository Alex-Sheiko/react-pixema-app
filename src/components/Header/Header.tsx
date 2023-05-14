import { Logo, Search, SwitchButton } from "components";
import { useInput, useToggle } from "hooks";
import { StyledHeader } from "./styles";
import { getTheme, toggleTheme, useAppDispatch, useAppSelector } from "store";
import { ChangeEvent } from "react";

export const Header = () => {
  const search = useInput();
  const [isActive, toogleFilter] = useToggle();
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getTheme);
  const handleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? dispatch(toggleTheme("dark")) : dispatch(toggleTheme("light"));
  };
  const inputChecked = theme === "dark" ? true : false;

  return (
    <StyledHeader>
      <Logo />
      <Search {...search} onClick={toogleFilter} />
      <SwitchButton onChange={handleTheme} checked={inputChecked} />
    </StyledHeader>
  );
};
