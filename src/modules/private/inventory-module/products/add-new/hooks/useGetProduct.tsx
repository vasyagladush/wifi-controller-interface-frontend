import Api from "../../../../../../util/api";
import { useEffect, useState } from "react";
import { transformProductServerInputToFormValues } from "../data-transformers/products";
// import { ImageAttachmentApiType } from "../../../../../../util/types";
import { NewProductFormValues } from "../types";

export const useGetProduct = (id?: string) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<any[]>([]);
  const [productInfo, setProductInfo] =
    useState<Partial<NewProductFormValues>>();
  const getProductInfo = async () => {
    try {
      setLoading(true);
      if (id) {
        const result = await Api.getProduct(id);

        if (result?.images?.length) {
          setImages(result.images);
        }
        const formatted = transformProductServerInputToFormValues(result);
        setLoading(false);
        setProductInfo(formatted);
      }
    } catch (e: any) {
      console.error(e);
    }
  };
  useEffect(() => {
    getProductInfo();
  }, [id]);
  return {
    productInfo,
    images,
    loading,
    refreshProductInfo: getProductInfo,
  };
};
