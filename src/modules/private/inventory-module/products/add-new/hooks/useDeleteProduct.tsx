import Api from "../../../../../../util/api";
import { useState } from "react";
import { useNotification } from "../../../../../../hooks/useNotification";

export const useDeleteProduct = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const deleteProduct = async (id: string) => {
    try {
      setLoading(true);
      await Api.deleteProduct(id);
      return { deleted: true };
    } catch (e: any) {
      console.error(e);
      showNotification(e?.error?.message ?? "Something went wrong");
    }
    setLoading(false);
  };

  return { deleteProduct, loading };
};
