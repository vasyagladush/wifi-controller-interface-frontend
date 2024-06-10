import React, { lazy, useEffect } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { SuspenseLoader } from "../../components/suspense-loader/SuspenseLoader";
import { PrivateLayout } from "../../components/private-layout/PrivateLayout";
// import { CreatedByContextProvider } from "./context/CreatedByContextProvider";
import { CategoriesContextProvider } from "./inventory-module/context/CategoriesContextProvider";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { LoadingBlock } from "../../components/loading-block/LoadingBlock";
import { AppRoutes } from "../../constants/routes";
import { useNavigateParams } from "../../hooks/useNavigateParams";
// In this file we will determine which modules the user has access to,
// where he's allowed to navigate and which modules should be rendered for him.
// Also here we will instantiate the main layout

// This is an example of using lazy loading for modules
const InventoryModule = lazy(async () => await import("./inventory-module"));
const SettingsModule = lazy(async () => await import("./settings-module"));
const ProfileModule = lazy(async () => await import("./profile-module"));

const PrivateModule = () => {
  const navigate = useNavigateParams();
  // const redirectionCheck = useRedirectionCheck();
  const [searchParams] = useSearchParams();
  const { loading, checkSignInStatus } = useAuthCheck();

  // const asyncCheck = async () => {
  //   const { companyData } = await checkSignInStatus();
  //   if (!companyData.address) {
  //     navigate(AppRoutes.Open.Auth.SIGN_UP_COMPANY_INFO);
  //   } else if (
  //     companyData.type === CompanyTypes.COMPANY &&
  //     !companyData.tradingAddress
  //   ) {
  //     navigate(AppRoutes.Open.Auth.SIGN_UP_LIMITED);
  //   }

  //   const [shouldBeRedirected, redirectionPath] =
  //     redirectionCheck(searchParams);
  //   if (shouldBeRedirected && redirectionPath) {
  //     navigate(redirectionPath, searchParams);
  //   }
  // };
  // useEffect(() => {
  //   asyncCheck();
  // }, []);

  return (
    <LoadingBlock loading={loading}>
      {/* <CreatedByContextProvider> */}
      <CategoriesContextProvider>
        <Routes>
          <Route path="/" element={<PrivateLayout />}>
            <Route
              path="inventory/*"
              element={
                <SuspenseLoader>
                  <InventoryModule />
                </SuspenseLoader>
              }
            />
            <Route
              path="settings/*"
              element={
                <SuspenseLoader>
                  <SettingsModule />
                </SuspenseLoader>
              }
            />
            <Route
              path="profile/*"
              element={
                <SuspenseLoader>
                  <ProfileModule />
                </SuspenseLoader>
              }
            />
          </Route>
        </Routes>
      </CategoriesContextProvider>
      {/* </CreatedByContextProvider> */}
    </LoadingBlock>
  );
};

export default PrivateModule;
