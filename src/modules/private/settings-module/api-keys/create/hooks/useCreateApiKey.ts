import { useState } from "react";
import api from "../../../../../../util/api";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../../hooks/useNotification";
import { ApiKeyFormValues } from "../types";

export const useCreateApiKey = () => {
  const [loading, setLoading] = useState(false);
  const { showNotification } = useNotification();

  const createApiKey = async (data: ApiKeyFormValues) => {
    try {
      setLoading(true);
      // await api.createApiKey(data);
      showNotification(
        "The key was successfully created",
        NotificationTypes.SUCCESS
      );
    } catch (e: any) {
      console.error(e);
      showNotification(e as string, NotificationTypes.DANGER);
    }
    setLoading(false);
  };

  return { createApiKey, loading };
};
