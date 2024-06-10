import Api from "../../../../../../util/api";
import { useState } from "react";
import {
  transformProductWithVariantFormValuesToServer,
  transformVariantToServerInput,
} from "../data-transformers/products";
import { NewProductFormValues } from "../types";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../../hooks/useNotification";

export const useUpdateProductWithVariant = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const updateProductWithVariant = async (
    productId: string,
    variantId: string,
    formData: NewProductFormValues,
    files?: File[],
    imagesToDetach?: string[]
  ) => {
    try {
      setLoading(true);
      const apiDataProduct = transformProductWithVariantFormValuesToServer(
        formData,
        !!productId
      );
      const apiDataVariant = transformVariantToServerInput(formData);

      const productResult = await Api.updateProduct(productId, apiDataProduct);
      // const variantResult = await Api.updateVariant(
      //   productId,
      //   variantId,
      //   apiDataVariant
      // );

      // if (files && files.length > 0) {
      //   await Api.attachImagesToProductVariant(
      //     productResult?.result._id,
      //     variantId,
      //     files
      //   );
      // }
      // if (imagesToDetach && imagesToDetach?.length > 0) {
      //   await Api.detachImagesFromProductVariant(
      //     productResult?.result._id,
      //     variantId,
      //     imagesToDetach
      //   );
      // }
      // await Api.pushUpdatedProductToIntegrations(productResult.result._id);

      showNotification(
        "Product changed successfully",
        NotificationTypes.SUCCESS
      );
      setLoading(false);
      return { productResult, variantResult: {} };
    } catch (e: any) {
      console.error(e);
      showNotification(
        e?.error?.message ?? "Something went wrong",
        NotificationTypes.WARNING
      );
      try {
        // await Api.pushUpdatedProductToIntegrations(productId);
      } catch (e: any) {
        console.error(
          "An error occurred while pushing updated product to integrations",
          e
        );
      }
    }
    setLoading(false);
  };
  return { updateProductWithVariant, loading };
};
