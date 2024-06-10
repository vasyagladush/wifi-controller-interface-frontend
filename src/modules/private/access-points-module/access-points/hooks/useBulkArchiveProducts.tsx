import { useState } from "react";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../hooks/useNotification";
import api from "../../../../../util/api";

export const useBulkArchiveProducts = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const bulkArchiveProducts = async (productIds: string[]) => {
    setLoading(true);
    try {
      // await api.bulkArchiveProducts(productIds);
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

  return { bulkArchiveProducts, loading };
};
