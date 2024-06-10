import { Route, Routes } from "react-router-dom";
import { SuspenseLoader } from "../../../components/suspense-loader/SuspenseLoader";
import { lazy } from "react";

const ApiKeysModule = lazy(async () => await import("./api-keys"));

const SettingsModule = () => {
  return (
    // <RolesContextProvider>
    <Routes>
      <Route
        path="/api-keys/*"
        element={
          <SuspenseLoader>
            <ApiKeysModule />
          </SuspenseLoader>
        }
      />
    </Routes>
    // </RolesContextProvider>
  );
};
export default SettingsModule;
