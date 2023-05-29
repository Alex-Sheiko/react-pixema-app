import { Button, Label, SwitchButton, Title } from "components";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getTheme, toggleTheme, updateUserProfile, useAppDispatch, useAppSelector } from "store";
import { Input } from "ui";
import { GroupButton, FormCard, DescSpan, FormSettings } from "./styles";
import { toast } from "react-toastify";
interface SettingsData {
  name: string;
  email: string;
  passwordConfirm: string;
  passwordNew: string;
}

export const SettingsPage = () => {
  const { theme } = useAppSelector(getTheme);
  const dispatch = useAppDispatch();
  const handleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? dispatch(toggleTheme("dark")) : dispatch(toggleTheme("light"));
  };
  const inputChecked = theme === "dark" ? true : false;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SettingsData>({
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<SettingsData> = ({ name, email, passwordConfirm, passwordNew }) => {
    if (passwordNew === passwordConfirm) {
      dispatch(updateUserProfile({ name, email, password: passwordNew, theme })).then((response) =>
        reset(),
      );
    } else {
      toast.warning("Passwords do not match");
    }
  };
  const onReset = () => reset();
  return (
    <FormSettings
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <Title option="H2" text="Profile" />
      <FormCard>
        <Label text="Name">
          <Input
            placeholder="Your name"
            type="text"
            {...register("name", { required: true, pattern: /^[A-Z][a-z]+ [A-Z][a-z]+$/ })}
          />
        </Label>
        <Label text="Email">
          <Input placeholder="Your email" type="email" {...register("email", { required: true })} />
        </Label>
      </FormCard>
      <Title option="H2" text="Password" />
      <FormCard>
        <Label text="New Password">
          <Input
            placeholder="New password"
            type="password"
            $error={errors.passwordNew && true}
            {...register("passwordNew", { required: true })}
          />
        </Label>
        <Label text="Confirm Password">
          <Input
            placeholder="Confirm password"
            type="password"
            $error={errors.passwordConfirm && true}
            {...register("passwordConfirm", { required: true })}
          />
        </Label>
      </FormCard>
      <Title option="H2" text="Color mode" />
      <FormCard>
        <Label text="Dark">
          <DescSpan>Use dark theme</DescSpan>
        </Label>
        <SwitchButton onChange={handleTheme} checked={inputChecked} />
      </FormCard>
      <GroupButton>
        <Button type="button" text="Cancel" option="secondary" onClick={onReset} />
        <Button type="submit" text="Save" option="primary" />
      </GroupButton>
    </FormSettings>
  );
};
