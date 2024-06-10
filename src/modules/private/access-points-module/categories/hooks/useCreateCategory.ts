import { useState } from "react";
import { AddCategoryFormValues } from "../types";
import Api from "../../../../../util/api";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../hooks/useNotification";

export const useCreateCategory = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const createCategory = async (
    formData: AddCategoryFormValues,
    file?: File | null,
    parent?: string | null
  ) => {
    setLoading(true);
    const { name, description } = formData;

    const modifiedData = {
      name,
      description,
    };

    parent && Object.assign(modifiedData, { parent });

    try {
      const apiRes = await Api.createCategory(modifiedData, file);
      setLoading(false);
      return apiRes;
    } catch (e: any) {
      showNotification(
        e?.error?.message ??
          "An error happened while creating the category, please try again",
        NotificationTypes.DANGER
      );

      setLoading(false);
    }
  };

  return { loading, createCategory };
};
