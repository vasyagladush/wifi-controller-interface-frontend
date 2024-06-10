import styled from "styled-components";
import React, { FC } from "react";
import { TextFormInput } from "../../../../../components/form-fields";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { TextInputWidth } from "../../../../../components/form-fields/TextFormInput.interface";
import {
  Button,
  ButtonVariant,
  // Hypertext,
} from "../../../../../components/ui-kit";
import { useChangePassword } from "../hooks/useChangePassword";

const ViewRow = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-end;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const StyledTextFormInputLeft = styled(TextFormInput)`
  display: flex;
  flex: 1;
  margin-right: 10px;
`;

const CancelBtn = styled(Button)`
  margin-top: 28px;
`;

const Savebtn = styled(Button)`
  margin-left: 20px;
  margin-top: 28px;
`;

const yupSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .required("Old password is required")
    .min(8, "At least 8 characters")
    .matches(
      /^.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*$/,
      "Password needs to have a special character (! # $ ? % @)"
    )
    .matches(/^.*[0-9].*$/, "Password needs to have a number")
    .matches(/^.*[a-z].*$/, "Password needs to have a lowercase letter")
    .matches(/^.*[A-Z].*$/, "Password needs to have an uppercase letter"),
  newPassword: yup
    .string()
    .required("Password is required")
    .min(8, "At least 8 characters")
    .matches(
      /^.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*$/,
      "Password needs to have a special character (! # $ ? % @)"
    )
    .matches(/^.*[0-9].*$/, "Password needs to have a number")
    .matches(/^.*[a-z].*$/, "Password needs to have a lowercase letter")
    .matches(/^.*[A-Z].*$/, "Password needs to have an uppercase letter"),
  newPasswordConfirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

interface PasswordValues {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

export const PasswordForm: FC<{ handleClose: () => void }> = ({
  handleClose,
}) => {
  const { changePassword, loading } = useChangePassword();
  const { control, handleSubmit } = useForm<PasswordValues>({
    mode: "onChange",
    resolver: yupResolver(yupSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
  });

  const onChangePass = async (values: PasswordValues) => {
    await changePassword(values.oldPassword, values.newPassword);
    handleClose();
  };

  return (
    <Container>
      <StyledTextFormInputLeft
        control={control}
        name="oldPassword"
        label="Old password"
        placeholder="Your old password"
        width={TextInputWidth.MEDIUM}
        type="password"
      />
      {/* <Hypertext */}
      {/*  style={{ marginLeft: "auto", marginTop: 4 }} */}
      {/*  onClick={() => { */}
      {/*    console.warn("pass"); */}
      {/*  }} */}
      {/*  to="/sign-in" */}
      {/* > */}
      {/*  Forgot password? */}
      {/* </Hypertext> */}
      <StyledTextFormInputLeft
        control={control}
        name="newPassword"
        label="New password"
        placeholder="Your new password"
        width={TextInputWidth.MEDIUM}
        type="password"
      />
      <StyledTextFormInputLeft
        control={control}
        name="newPasswordConfirmation"
        label="Repeat password"
        placeholder="Repeat your new password"
        width={TextInputWidth.MEDIUM}
        type="password"
      />
      <ViewRow>
        <CancelBtn variant={ButtonVariant.OUTLINED} onClick={handleClose}>
          Cancel
        </CancelBtn>
        <Savebtn loading={loading} onClick={handleSubmit(onChangePass)}>
          Save
        </Savebtn>
      </ViewRow>
    </Container>
  );
};
