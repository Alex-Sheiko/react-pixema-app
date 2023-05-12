import { Search } from "components";
import { useInput, useToggle } from "hooks";
import { StyledHeader } from "./styles";

export const Header = () => {
  const search = useInput();
  const [isActive, toogleFilter] = useToggle();

  return (
    <StyledHeader>
      <Search {...search} onClick={toogleFilter} />
    </StyledHeader>
  );
};
