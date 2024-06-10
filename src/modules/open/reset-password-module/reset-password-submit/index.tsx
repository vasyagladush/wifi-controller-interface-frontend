export {}
// import {
//   TypographyVariant,
//   ButtonVariant,
// } from "../../../../components/ui-kit";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useEffect, useState } from "react";
// import { passwordFormSchema } from "../../validation";
// import { ContentCard } from "../../components/ContentCard";
// import { ErrorMessage, StyledButton, Wrapper } from "../../styles";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { LoadingBlock } from "../../../../components/loading-block/LoadingBlock";
// import { TextFormInput } from "../../../../components/form-fields";
// import { Auth } from "aws-amplify";
// import { PasswordValidation } from "../../components/PasswordValidation";
// import { EyeBlock, EyeBlockVisible } from "../../../../components/icons";
// import styled from "styled-components";
// import { AppRoutes } from "../../../../constants/routes";

// const PasswordIcons = styled.div`
//   display: flex;
// `;

// const SuccessIcon = styled.img`
//   margin-right: 10px;
// `;
// export interface ResetPasswordFormProps {
//   password: string;
//   repeatPassword: string;
// }
// const SuccessContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ResetPasswordSubmit: React.FunctionComponent = () => {
//   const {
//     control,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<ResetPasswordFormProps>({
//     mode: "onChange",
//     resolver: yupResolver(passwordFormSchema),
//     defaultValues: {
//       password: "",
//     },
//     criteriaMode: "all", // must be added to display "types" field in error object for password validation modal
//   });
//   const [searchParams] = useSearchParams();

//   const email = searchParams.get("email");
//   const code = searchParams.get("code");
//   const [_email, setEmail] = useState<string>("");
//   const [_code, setCode] = useState<string>("");
//   const [success, setSuccess] = useState<boolean>(false);
//   const psw = watch("password");
//   const repeatPsw = watch("repeatPassword");
//   useEffect(() => {
//     setEmail(email!);
//     setCode(code!);
//   }, [email, code]);
//   const navigate = useNavigate();

//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const passwordValidation: Record<string, string> = {
//     min: "At least 8 characters",
//     special_character: "Special character (! # $ ? % @)",
//     number: "Numbers (i.e. 0-9)",
//     lowercase: "Lower case letters (a-z)",
//     uppercase: "Upper case letters (A-Z)",
//     spaces: "No spaces",
//   };
//   const [isValidationContainerVisible, setIsValidationContainerVisible] =
//     useState(false);
//   const [passwordVisibility, setPasswordVisibility] = useState(false);

//   const setPasswordVisibilityHandler = () => {
//     setPasswordVisibility(!passwordVisibility);
//   };
//   const onSubmit = async (formValue: ResetPasswordFormProps) => {
//     try {
//       setLoading(true);
//       const result = await Auth.forgotPasswordSubmit(
//         _email,
//         _code,
//         formValue.password
//       );
//       if (result.toUpperCase() === "SUCCESS") {
//         setSuccess(true);
//       }

//       setLoading(false);
//     } catch (e: any) {
//       setErrorMessage(e?.error?.message || e);
//       setLoading(false);
//     }
//   };

//   return (
//     <Wrapper>
//       <LoadingBlock>
//         <ContentCard title="Reset password">
//           {!success ? (
//             <>
//               {errorMessage && (
//                 <ErrorMessage variant={TypographyVariant.BODY2} color="#EF6355">
//                   {errorMessage}
//                 </ErrorMessage>
//               )}
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <TextFormInput
//                   control={control}
//                   name="password"
//                   label="Password"
//                   defaultValue=""
//                   successBorder={!!psw}
//                   type={passwordVisibility ? "text" : "password"}
//                   onFocus={() => {
//                     setIsValidationContainerVisible(true);
//                   }}
//                   onBlur={() => {
//                     !errors?.password && setIsValidationContainerVisible(false);
//                   }}
//                   rightIcon={() => {
//                     if (isValidationContainerVisible) {
//                       return (
//                         <PasswordIcons onClick={setPasswordVisibilityHandler}>
//                           {passwordVisibility ? (
//                             <EyeBlock />
//                           ) : (
//                             <EyeBlockVisible />
//                           )}
//                         </PasswordIcons>
//                       );
//                     } else if (psw) {
//                       return (
//                         <PasswordIcons>
//                           <SuccessIcon
//                             alt=""
//                             src="/icon/success-nooutline.svg"
//                           />
//                           {passwordVisibility ? (
//                             <div onClick={setPasswordVisibilityHandler}>
//                               <EyeBlock />
//                             </div>
//                           ) : (
//                             <div onClick={setPasswordVisibilityHandler}>
//                               <EyeBlockVisible />
//                             </div>
//                           )}
//                         </PasswordIcons>
//                       );
//                     }

//                     return <></>;
//                   }}
//                   placeholder="at least 8 characters"
//                   disableErrorMessage
//                   required
//                 />
//                 <PasswordValidation
//                   isValidationContainerVisible={isValidationContainerVisible}
//                   passwordValidation={passwordValidation}
//                   errors={errors}
//                 />
//                 {psw && !errors.password && (
//                   <TextFormInput
//                     control={control}
//                     name="repeatPassword"
//                     label="Repeat password"
//                     successBorder={!!repeatPsw && !errors?.repeatPassword}
//                     type="password"
//                     rightIcon={() =>
//                       !repeatPsw || errors?.repeatPassword ? (
//                         <img alt="" src="/icon/error.svg" />
//                       ) : (
//                         <img alt="" src="/icon/success-nooutline.svg" />
//                       )
//                     }
//                     required
//                   />
//                 )}
//                 <StyledButton
//                   loading={loading}
//                   disabled={Object.keys(errors).length !== 0}
//                   fullWidth
//                   variant={ButtonVariant.CONTAINED}
//                 >
//                   Reset password
//                 </StyledButton>
//               </form>
//             </>
//           ) : (
//             <>
//               <>Your password has been successfully changed</>
//               <SuccessContainer>
//                 <StyledButton
//                   onClick={() => {
//                     navigate(AppRoutes.Open.Auth.SIGN_IN_START);
//                   }}
//                 >
//                   Go to login
//                 </StyledButton>
//               </SuccessContainer>
//             </>
//           )}
//         </ContentCard>
//       </LoadingBlock>
//     </Wrapper>
//   );
// };

// export default ResetPasswordSubmit;
