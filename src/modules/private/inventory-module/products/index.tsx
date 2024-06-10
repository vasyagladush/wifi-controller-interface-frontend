import { Route, Routes } from "react-router-dom";
import { ProductsList } from "./product-list/ProductList";
import { AddNewProduct } from "./add-new/AddNewProduct";

const ProductsModule = () => {
  return (
    <Routes>
      <Route index element={<ProductsList />} />
      <Route path="new" element={<AddNewProduct />} />
      <Route path="edit/:id" element={<AddNewProduct editing />} />
    </Routes>
  );
};

export default ProductsModule;
