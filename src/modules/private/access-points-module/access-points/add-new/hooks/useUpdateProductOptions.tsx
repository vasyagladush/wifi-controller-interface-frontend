import Api from "../../../../../../util/api";
import { useState } from "react";
import { OptionsFormValues } from "../components/OptionsControl";

export const useUpdateProductOptions = () => {
  const [loading, setLoading] = useState(false);
  const updateProductOptions = async (
    id: string,
    formData: OptionsFormValues
  ) => {
    try {
      setLoading(true);

      // const result = await Api.updateProductOptions(id, formData.options);
      const result = {};

      setLoading(false);
      return result;
    } catch (e: any) {
      console.error(e);
    }
  };
  return { updateProductOptions, loading };
};
