import { Input } from "ui";
import styled from "styled-components";
import { SearchFilterIcon } from "assets";

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  grid-area: search;
`;

export const SearchInput = styled(Input)`
  width: 100%;
`;

export const FilterMenuIcon = styled(SearchFilterIcon)`
  position: absolute;
  right: 20px;
  &:hover {
    cursor: pointer;
  }
`;
