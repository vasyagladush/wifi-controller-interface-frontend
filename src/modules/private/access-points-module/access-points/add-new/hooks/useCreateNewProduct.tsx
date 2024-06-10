import Api from "../../../../../../util/api";
import { useState } from "react";
import { transformProductWithVariantFormValuesToServer } from "../data-transformers/products";
import { NewProductFormValues } from "../types";

export const useCreateNewProduct = () => {
  const [loading, setLoading] = useState(false);
  const createNewProduct = async (
    formData: NewProductFormValues,
    files?: File[]
  ) => {
    try {
      setLoading(true);
      const apiData = transformProductWithVariantFormValuesToServer(formData);
      console.warn(apiData);
      const result = await Api.createProduct(apiData);
      setLoading(false);
      return result;
    } catch (e: any) {
      console.error(e);
    }
  };
  return { createNewProduct, loading };
};
