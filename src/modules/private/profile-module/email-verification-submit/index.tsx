export {};
// import styled from "styled-components";
// import {
//   Typography,
//   Button,
//   TypographyVariant,
//   ButtonVariant,
// } from "../../../../components/ui-kit";
// import React, { useEffect, useState } from "react";

// import {
//   NotificationTypes,
//   useNotification,
// } from "../../../../hooks/useNotification";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { Auth } from "aws-amplify";
// import api from "../../../../util/api";
// import { useUserContext } from "../../../../context/UserContextProvider";
// import { AppRoutes } from "../../../../constants/routes";

// const MainContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ContainerBox = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   //height: 834px;
//   background: #ffffff;
//   border: 1px solid #eeeeee;
//   border-radius: 10px;
//   padding: 30px;
// `;

// const ButtonWrapper = styled.div`
//   margin-top: 15px;
//   gap: 15px;
//   display: flex;
//   justify-content: center;
// `;

// export const EmailVerificationSubmit: React.FunctionComponent = () => {
//   const { user } = useUserContext();
//   const navigate = useNavigate();

//   const { showNotification } = useNotification();
//   const [searchParams] = useSearchParams();
//   const [success, setSuccess] = useState(false);
//   const [message, setMessage] = useState("");
//   const email = searchParams.get("email");
//   const code = searchParams.get("code");

//   const { refreshUserData } = useUserContext();

//   const codeSubmit = async (code: string) => {
//     try {
//       const res = await Auth.verifyCurrentUserAttributeSubmit("email", code);
//       if (res === "SUCCESS") {
//         await api.updateUserAttributeVerificationStatus("emailVerified", true);
//         refreshUserData();
//         setMessage("Email address was successfully verified.");
//         setSuccess(true);
//       } else setMessage(res);
//     } catch (err: any) {
//       if (err.code === "ExpiredCodeException") {
//         setMessage("Invalid code provided, please request a code again.");
//       } else if (err.code === "LimitExceededException") {
//         setMessage("Attempt limit exceeded, please try after some time.");
//       } else {
//         setMessage(JSON.stringify(err));
//       }
//     }
//   };
//   const resendCode = async () => {
//     const authUser = await Auth.currentAuthenticatedUser();
//     await Auth.verifyUserAttribute(authUser, "email", {
//       environment: "toolkit",
//       usedId: user._id,
//     });
//   };

//   const handleGoToProfile = () => {
//     navigate(AppRoutes.Private.Profile.PROFILE_SETTINGS);
//   };

//   useEffect(() => {
//     if (!code || !email) {
//       showNotification("Incorrect url", NotificationTypes.DANGER);
//       setMessage("Incorrect url");
//     } else {
//       codeSubmit(code);
//     }
//   }, [email, code]);
//   return (
//     <MainContainer>
//       <ContainerBox>
//         <Typography
//           variant={TypographyVariant.HEADER2}
//           style={{ color: "#556CB1", textAlign: "center" }}
//         >
//           {message}
//         </Typography>
//         <ButtonWrapper>
//           <Button onClick={handleGoToProfile}>Go to Profile</Button>
//           {!success && (
//             <Button variant={ButtonVariant.CONTAINED} onClick={resendCode}>
//               Resend code
//             </Button>
//           )}
//         </ButtonWrapper>
//       </ContainerBox>
//     </MainContainer>
//   );
// };
