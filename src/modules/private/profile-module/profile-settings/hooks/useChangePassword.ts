import { useState } from "react";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../hooks/useNotification";
// import { Auth } from "aws-amplify";

export const useChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const { showNotification } = useNotification();

  const changePassword = async (oldPassword: string, newPassword: string) => {
    setLoading(true);
    // const currentUser = await Auth.currentAuthenticatedUser();
    try {
      // await Auth.changePassword(currentUser, oldPassword, newPassword);
      showNotification("Password changed successfully");
    } catch (e: any) {
      console.error(e);
      showNotification(
        e?.error?.message ?? "Something went wrong",
        NotificationTypes.DANGER
      );
    }
    setLoading(false);
  };

  return { changePassword, loading };
};
