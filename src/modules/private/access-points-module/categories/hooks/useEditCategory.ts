import { useState } from "react";
import { AddCategoryFormValues } from "../types";
import Api from "../../../../../util/api";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../hooks/useNotification";

export const useEditCategory = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const editCategory = async (
    id: string,
    formData: AddCategoryFormValues,
    file?: File | null,
    deleteFile?: boolean
  ) => {
    setLoading(true);
    const { name, description, parent } = formData;
    const forSubmition = {
      name,
      description,
    };
    parent && Object.assign(forSubmition, { parent });
    deleteFile && Object.assign(forSubmition, { deleteFile });

    try {
      const apiRes = await Api.updateCategory(forSubmition, id, file);

      setLoading(false);
      showNotification(
        "Successfully updated category",
        NotificationTypes.SUCCESS
      );
      return apiRes;
    } catch (e: any) {
      showNotification(
        e?.error?.message ??
          "An error happened while editing the category, please try again",
        NotificationTypes.DANGER
      );
      setLoading(false);
    }
  };

  return { loading, editCategory };
};
