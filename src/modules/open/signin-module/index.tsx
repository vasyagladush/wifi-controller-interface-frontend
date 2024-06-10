import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { signInSchema } from "../validation";
import { ContentCard } from "../components/ContentCard";
import {
  Body1,
  ErrorMessage,
  ForgotPasswordButton,
  StyledButton,
  StyledLink,
  Wrapper,
} from "../styles";
import SignInForm from "./components/SignInForm";
import { useAuthCheck } from "../../../hooks/useAuthCheck";
import { useSignIn } from "./hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../constants/routes";

import {
  ButtonVariant,
  Typography,
  TypographyVariant,
} from "../../../components/ui-kit";
import styled from "styled-components";
import { CodeInput } from "../../../components/form-fields/CodeInput";

import Exclamation from "../../../components/icons/Exclamation";
interface FormValues {
  username: string;
  password: string;
}
const StyledTypography = styled(Typography)`
  text-align: center;
`;
const StyledTypographyError = styled(StyledTypography)`
  color: #ef6355;
  margin-right: 10px;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const StyledCodeInput = styled(CodeInput)`
  margin-left: 100px;
`;
const ClickableStyledTypography = styled(StyledTypography)`
  color: #027aff;
  :hover {
    cursor: pointer;
  }
`;

const SignInModule: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(signInSchema),
  });

  const usernameFormItem = watch("username");
  const passwordFormItem = watch("password");

  const { checkSignInStatus } = useAuthCheck();
  const { signIn, loading, updateLoading } = useSignIn();
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [error, setError] = useState<string>("");

  // const onPasswordForgot = () => {
  //   navigate(AppRoutes.Open.Auth.PASSWORD_RESET);
  // };

  const asyncCheck = async () => {
    const res = await checkSignInStatus();
    console.log('CHECK SIGN IN: ', res);
    if (res.user) {
      navigate(AppRoutes.Private.AccessPoints.AP_LIST);
    }
  };
  useEffect(() => {
    asyncCheck();
  }, []);
  useEffect(() => {
    if (usernameFormItem || passwordFormItem) {
      setErrorMessage(null);
    }
  }, [usernameFormItem, passwordFormItem]);
  const onSubmit = async (values: FormValues) => {
    const { username, password } = values;
    try {
      const res = await signIn(username, password);
      console.log('SIGN IN RES: ', res);
      if (res.user) navigate(AppRoutes.Private.AccessPoints.AP_LIST);
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error);
      updateLoading(false);
    }
  };

  return (
    <Wrapper>
      <ContentCard disableEndSession title="Sign in">
        {errorMessage && (
          <ErrorMessage variant={TypographyVariant.BODY2} color="#EF6355">
            Username/Password combination is incorrect
          </ErrorMessage>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <SignInForm control={control} />
          <StyledButton
            loading={loading}
            disabled={Object.keys(errors).length !== 0}
            fullWidth
            variant={ButtonVariant.CONTAINED}
          >
            Sign in
          </StyledButton>
        </form>
      </ContentCard>
    </Wrapper>
  );
};

export default SignInModule;
