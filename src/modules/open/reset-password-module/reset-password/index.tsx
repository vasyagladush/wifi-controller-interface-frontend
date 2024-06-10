export {}
// import {
//   TypographyVariant,
//   ButtonVariant,
//   Typography,
// } from "../../../../components/ui-kit";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useEffect, useState } from "react";
// import { emailSchema } from "../../validation";
// import { ContentCard } from "../../components/ContentCard";
// import { ErrorMessage, StyledButton, Wrapper } from "../../styles";
// import { LoadingBlock } from "../../../../components/loading-block/LoadingBlock";
// import { TextFormInput } from "../../../../components/form-fields";
// import api from "../../../../util/api";

// const ResetPasswordModule: React.FunctionComponent = () => {
//   const {
//     control,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<{ email: string }>({
//     mode: "onChange",
//     resolver: yupResolver(emailSchema),
//   });
//   const emailFormItem = watch("email");
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [isSuccess, setIsSuccess] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     if (emailFormItem) {
//       setErrorMessage(null);
//     }
//   }, [emailFormItem]);

//   const onSubmit = async (formValue: { email: string }) => {
//     try {
//       setLoading(true);
//       const result = await api.userByEmailExist(formValue.email);
//       if (result?.data?.emailVerified === false) {
//         setErrorMessage(
//           "User with this email address not found or email address has not been verified. Please contact support for help resetting your password. "
//         );
//         setLoading(false);
//         return;
//       } else {
//         const forgotResult = await Auth.forgotPassword(formValue.email, {
//           environment: "toolkit",
//           userId: result.data.id,
//         });
//         if (forgotResult) {
//           setIsSuccess(true);
//         }
//         setLoading(false);
//       }
//     } catch (error: any) {
//       if (error?.status === 404)
//         setErrorMessage(
//           "User with this email address not found or email address has not been verified. Please contact support for help resetting your password. "
//         );
//       else {
//         setErrorMessage(error?.message || error);
//       }
//       setLoading(false);
//     }
//   };

//   return (
//     <Wrapper>
//       <LoadingBlock>
//         <ContentCard title="Reset password">
//           {!isSuccess ? (
//             <>
//               {errorMessage && (
//                 <ErrorMessage variant={TypographyVariant.BODY2} color="#EF6355">
//                   {errorMessage}
//                 </ErrorMessage>
//               )}
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <TextFormInput
//                   control={control}
//                   name="email"
//                   label="Email"
//                   placeholder="example@mail.com"
//                   required
//                 />
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
//               <Typography>
//                 Password reset guide has been sent to {emailFormItem}
//               </Typography>
//             </>
//           )}
//         </ContentCard>
//       </LoadingBlock>
//     </Wrapper>
//   );
// };

// export default ResetPasswordModule;
