import { useState } from "react";
import api from "../../../../util/api";
import {
  NotificationTypes,
  useNotification,
} from "../../../../hooks/useNotification";

export const usePostConsole = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const postToConsole = async (args: Array<string>): Promise<string | undefined> => {
    setLoading(true);
    try {
      const result = await api.postToConsole(args);

      // showNotification(
      //   "Successfully sent the command to console",
      //   NotificationTypes.SUCCESS
      // );

      return result.output;
    } catch (e: any) {
      console.error(e);
      showNotification("Something went wrong", NotificationTypes.WARNING);
      return "Something went wrong";
    }
    setLoading(false);
  };

  return { postToConsole, loading };
};
