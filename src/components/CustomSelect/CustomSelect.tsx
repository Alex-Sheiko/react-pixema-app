import Select, { SingleValue } from "react-select";
import { selectStyles } from "./styles";

export enum MovieType {
  MOVIES = "movie",
  SERIES = "series",
  EPISODE = "episode",
}

export interface SelectOption {
  value: MovieType;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: SelectOption | undefined;
  defaultValue: SelectOption;
  onChange: (option: SingleValue<SelectOption> | unknown) => void;
}

export const CustomSelect = ({ options, value, defaultValue, onChange }: SelectProps) => {
  return (
    <Select
      defaultValue={defaultValue}
      styles={selectStyles}
      options={options}
      value={value}
      isMulti={false}
      isSearchable={false}
      onChange={onChange}
    />
  );
};
