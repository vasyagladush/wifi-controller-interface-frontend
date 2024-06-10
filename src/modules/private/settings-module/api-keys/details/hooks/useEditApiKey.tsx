import { useState } from "react";
import Api from "../../../../../../util/api";
// import { ApiKey } from "@fena/toolkit-types";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../../hooks/useNotification";

export const useEditApiKey = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const editApiKey = async (id: string, data: Partial<any>) => {
    try {
      setLoading(true);
      // const result = await Api.editApiKey(id, data);
      const result = { data: {} } as any;
      console.warn(result);
      setLoading(false);
      showNotification("Api key edited successfully");
      return result.data;
    } catch (e: any) {
      console.error(e);
      showNotification(
        e?.error?.message ?? "Something went wrong",
        NotificationTypes.DANGER
      );
    }
  };

  return { editApiKey, loading };
};
