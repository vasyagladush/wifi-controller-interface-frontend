import { useState } from "react";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../hooks/useNotification";
import api from "../../../../../util/api";
// import { ProductStatus } from "@fena/toolkit-types";

export const useBulkStatusUpdateProducts = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const bulkStatusUpdateProducts = async (
    productIds: string[],
    status: any
  ) => {
    setLoading(true);
    try {
      // await api.bulkStatusUpdateProducts(productIds, status);
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

  return { bulkStatusUpdateProducts, loading };
};
