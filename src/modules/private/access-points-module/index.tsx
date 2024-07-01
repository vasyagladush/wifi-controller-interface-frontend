import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SuspenseLoader } from "../../../components/suspense-loader/SuspenseLoader";
import { TableContextProvider } from "../../../components/ui-kit/ReactTable/context/TableContext";

const AccessPointsModule = lazy(async () => await import("./access-points"));

const InventoryModule = () => {
  return (
    <TableContextProvider>
      <Routes>
        <Route
          path="/*"
          element={
            <SuspenseLoader>
              <AccessPointsModule />
            </SuspenseLoader>
          }
        />
      </Routes>
    </TableContextProvider>
  );
};

export default InventoryModule;
