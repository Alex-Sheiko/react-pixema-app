import { ChangeEvent } from "react";
import { FilterMenuIcon, SearchInput, StyledSearch } from "./styles";

interface SearchProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onClick: () => void;
}

export const Search = ({ onChange, value, onClick }: SearchProps) => {
  return (
    <StyledSearch>
      <SearchInput
        onChange={onChange}
        value={value}
        name="search"
        type="search"
        placeholder="Search"
      />
      <FilterMenuIcon onClick={onClick} />
    </StyledSearch>
  );
};
