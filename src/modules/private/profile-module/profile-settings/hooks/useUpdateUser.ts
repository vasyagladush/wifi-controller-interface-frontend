import {
  NotificationTypes,
  useNotification,
} from "../../../../../hooks/useNotification";
import Api from "../../../../../util/api";
import { useState } from "react";
import { ProfileFormValues } from "../ProfileSettings";

export const useUpdateUser = () => {
  const [loading, setLoading] = useState(false);

  const { showNotification } = useNotification();

  const updateUser = async (
    formData: ProfileFormValues,
    file: File | null,
    deleteFile?: boolean
  ) => {
    setLoading(true);
    try {
      const forSubmit = formData;
      deleteFile && Object.assign(forSubmit, { deleteFile });
      // await Api.updateUser(forSubmit, file);
      showNotification(
        "Account details updated successfully",
        NotificationTypes.SUCCESS
      );
    } catch (e: any) {
      console.error(e);
      showNotification(
        "An error occurred while updating data",
        NotificationTypes.WARNING
      );
    }
    setLoading(false);
  };
  return { updateUser, loading };
};
