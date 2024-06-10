import { useState } from "react";
import Api from "../../../../../util/api";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../hooks/useNotification";

export const useDeleteCategory = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const deleteCategory = async (id: string, nextId: string) => {
    setLoading(true);
    try {
      const apiRes = await Api.deleteCategory({
        categoryId: id,
        newCategoryId: nextId,
      });
      setLoading(false);
      return apiRes;
    } catch (e: any) {
      showNotification(
        e?.error?.message ??
          "An error happened while deleting the category, please try again",
        NotificationTypes.DANGER
      );
      setLoading(false);
    }
  };

  return { loading, deleteCategory };
};
