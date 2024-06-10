import { Route, Routes } from "react-router-dom";
import { CategoriesList } from "./categories/CategoriesList";
import { lazy } from "react";
import { SuspenseLoader } from "../../../components/suspense-loader/SuspenseLoader";
import { TableContextProvider } from "../../../components/ui-kit/ReactTable/context/TableContext";
import { IncomingInventoryContextProvider } from "./context/IncomingInventoryContextProvider";

const ProductsModule = lazy(async () => await import("./products"));


const InventoryModule = () => {
  return (
      <TableContextProvider>
        <IncomingInventoryContextProvider>
          <Routes>
            <Route
              path="products/*"
              element={
                <SuspenseLoader>
                  <ProductsModule />
                </SuspenseLoader>
              }
            />
            <Route path="categories/*">
              <Route index element={<CategoriesList />} />
            </Route>
          </Routes>
        </IncomingInventoryContextProvider>
      </TableContextProvider>
  );
};

export default InventoryModule;
