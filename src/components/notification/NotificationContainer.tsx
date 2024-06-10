import React from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
  }
  .Toastify__toast-icon {
    margin-inline-end: 12px;
  }
  .Toastify__toast-body {
    padding-top: 0;
  }

  .Toastify__toast-theme--light {
    color: #2a3b89;
  }

  .Toastify__progress-bar--info {
    background: #027aff;
  }
  .Toastify__progress-bar--success {
    background: #00bc82;
  }
  .Toastify__progress-bar--warning {
    background: #f9a000;
  }
  .Toastify__progress-bar--error {
    background: #ef6355;
  }

  .Toastify__close-button {
    align-self: center;
    margin-top: -1px;
  }
`;

export const NotificationContainer = () => {
  return (
    <StyledContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};
