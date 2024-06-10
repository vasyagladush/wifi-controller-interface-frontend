import { Route, Routes } from "react-router-dom";
import { CategoriesList } from "./categories/CategoriesList";
import { lazy } from "react";
import { SuspenseLoader } from "../../../components/suspense-loader/SuspenseLoader";
import { TableContextProvider } from "../../../components/ui-kit/ReactTable/context/TableContext";
import { IncomingInventoryContextProvider } from "./context/IncomingInventoryContextProvider";

const ProductsModule = lazy(async () => await import("./access-points"));


const InventoryModule = () => {
  return (
      <TableContextProvider>
        <IncomingInventoryContextProvider>
          <Routes>
            <Route
              path="/*"
              element={
                <SuspenseLoader>
                  <ProductsModule />
                </SuspenseLoader>
              }
            />
          </Routes>
        </IncomingInventoryContextProvider>
      </TableContextProvider>
  );
};

export default InventoryModule;
