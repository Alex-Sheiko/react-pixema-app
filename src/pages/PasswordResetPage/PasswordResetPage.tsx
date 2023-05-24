import { Button, Label, Title } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { resetPassword, useAppDispatch } from "store";
import { Form, Input } from "ui";

interface ResetPasswordData {
  email: string;
}

export const PasswordResetPage = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>();
  const onSubmit: SubmitHandler<ResetPasswordData> = ({ email }) => dispatch(resetPassword(email));

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      exit={{ scale: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <Title option="H2" text="Reset Password" />
      <Label text="Email">
        <Input
          placeholder="Your email"
          type="email"
          $error={errors.email && true}
          {...register("email", { required: true })}
        />
      </Label>
      <Button option="primary" text="Reset" />
    </Form>
  );
};
