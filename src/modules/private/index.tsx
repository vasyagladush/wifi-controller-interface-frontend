import React, { lazy, useEffect } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { SuspenseLoader } from "../../components/suspense-loader/SuspenseLoader";
import { PrivateLayout } from "../../components/private-layout/PrivateLayout";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { LoadingBlock } from "../../components/loading-block/LoadingBlock";
import { AppRoutes } from "../../constants/routes";
import { useNavigateParams } from "../../hooks/useNavigateParams";
import MonitorModule from "./monitor-module";
import ConsoleModule from "./console-module";
// In this file we will determine which modules the user has access to,
// where he's allowed to navigate and which modules should be rendered for him.
// Also here we will instantiate the main layout

// This is an example of using lazy loading for modules
const InventoryModule = lazy(async () => await import("./access-points-module"));
const ProfileModule = lazy(async () => await import("./profile-module"));

const PrivateModule = () => {
  const navigate = useNavigateParams();
  const { loading, checkSignInStatus } = useAuthCheck();


  return (
    <LoadingBlock loading={loading}>
        <Routes>
          <Route path="/" element={<PrivateLayout />}>
            <Route
              path="access-points/*"
              element={
                <SuspenseLoader>
                  <InventoryModule />
                </SuspenseLoader>
              }
            />
            <Route
              path="monitor/*"
              element={
                <SuspenseLoader>
                  <MonitorModule />
                </SuspenseLoader>
              }
            />
            <Route
              path="console/*"
              element={
                <SuspenseLoader>
                  <ConsoleModule />
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
    </LoadingBlock>
  );
};

export default PrivateModule;
