// In this file we provide access to public modules, such as sign up, sign in, landing page, FAQ etc.

// Note that here we don't use any lazy loading (as compared to private modules),
// because it doesn't really make sense to make the auth part of the app be missing in the starting bundle

import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { OpenLayout } from "../../components/open-layout/OpenLayout";
import { SuspenseLoader } from "../../components/suspense-loader/SuspenseLoader";
// import ResetPasswordModule from "./reset-password-module";

const SignInModule = lazy(async () => await import("./signin-module"));

const OpenModule = () => {
  return (
    <Routes>
      <Route path="/" element={<OpenLayout />}>
        <Route index element={<Navigate to={"sign-in"} />} />
        <Route
          path="sign-in/*"
          element={
            <SuspenseLoader>
              <SignInModule />
            </SuspenseLoader>
          }
        />
      </Route>
      {/* <Route
        path="reset-password/*"
        element={
          <SuspenseLoader>
            <ResetPasswordModule />
          </SuspenseLoader>
        }
      /> */}
    </Routes>
  );
};

export default OpenModule;
