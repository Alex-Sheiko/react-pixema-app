import { ChangeEvent } from "react";
import { Label, StyledSwitch, Switcher } from "./styles";

interface SwitchProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export const SwitchButton = ({ onChange, checked }: SwitchProps) => {
  return (
    <StyledSwitch>
      <Switcher>
        <input id="switch" type="checkbox" onChange={onChange} checked={checked} />
        <Label htmlFor="switch" />
      </Switcher>
    </StyledSwitch>
  );
};
