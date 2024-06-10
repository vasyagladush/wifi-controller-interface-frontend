import { useState } from "react";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../hooks/useNotification";
import api from "../../../../../util/api";

export const useBulkMarkVariantsAsOutOfStock = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const bulkMarkVariantsAsOtOfStock = async (productVariantIds: string[]) => {
    setLoading(true);
    try {
      // await api.bulkMarkVariantsAsOutOfStock(productVariantIds);
      showNotification("Successfully", NotificationTypes.SUCCESS);
    } catch (e: any) {
      console.error(e);
      showNotification(
        e?.error?.message ?? "Something went wrong",
        NotificationTypes.WARNING
      );
    }
    setLoading(false);
  };

  return { bulkMarkVariantsAsOtOfStock, loading };
};
