import { Button, Label, RouterLink, Title } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { signUp, useAppDispatch } from "store";
import { Form, Input, InputGroup } from "ui";
import { Text } from "./styles";

interface IRegistrationData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const RegistrationPage = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegistrationData>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<IRegistrationData> = ({
    name,
    email,
    password,
    passwordConfirm,
  }) => {
    if (password === passwordConfirm) {
      dispatch(signUp({ name, email, password }))
        .unwrap()
        .then((response) => {
          reset();
        });
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      exit={{ scale: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <Title option="H2" text="Sign Up" />
      <InputGroup>
        <Label text="Fullname">
          <Input
            placeholder="Your fullname(Name Surname)"
            type="text"
            $error={errors.name && true}
            {...register("name", { required: true, pattern: /^[A-Z][a-z]+ [A-Z][a-z]+$/ })}
          />
        </Label>
        <Label text="Email">
          <Input
            placeholder="Your email"
            type="email"
            $error={errors.email && true}
            {...register("email", { required: true })}
          />
        </Label>
        <Label text="Password">
          <Input
            placeholder="Your password"
            type="password"
            $error={errors.password && true}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum characters 6" },
            })}
          />
        </Label>
        <Label text="Confirm Password">
          <Input
            placeholder="Confirm password"
            type="password"
            $error={errors.passwordConfirm && true}
            {...register("passwordConfirm", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum characters 6" },
            })}
          />
        </Label>
      </InputGroup>
      <Button text="Sign up" option="primary" type="submit" />
      <Text>
        Already have an account? <RouterLink to={`${ROUTE.HOME + ROUTE.LOGIN}`}>Sign In</RouterLink>
      </Text>
    </Form>
  );
};
