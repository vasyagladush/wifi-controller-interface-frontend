import { useState } from "react";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../../hooks/useNotification";
import Api from "../../../../../../util/api";

export const useDeleteAPIKey = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const deleteAPIKey = async (id: string) => {
    setLoading(true);
    try {
      // const apiRes = await Api.deleteApiKey(id);
      const apiRes = {} as any;
      setLoading(false);
      return apiRes;
    } catch (e: any) {
      showNotification(
        "An error happened while deleting the API key, please try again",
        NotificationTypes.DANGER
      );
      setLoading(false);
    }
  };

  return { loading, deleteAPIKey };
};
