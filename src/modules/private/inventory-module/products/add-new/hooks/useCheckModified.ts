import { useEffect, useState } from "react";
import { NewProductFormValues } from "../types";

export const useCheckModified = (
  defaultValues: Partial<NewProductFormValues>,
  watchAll: NewProductFormValues,
  files?: File[],
  imagesToDetach?: string[]
) => {
  const [isAnythingModified, setIsAnythingModified] = useState(false);

  useEffect(() => {
    const isVariantModified =
      JSON.stringify(defaultValues.variant) ===
      JSON.stringify(watchAll.variant);

    const isProductModified =
      JSON.stringify(defaultValues.availableIntegrationsSetup) ===
        JSON.stringify(watchAll.availableIntegrationsSetup) &&
      JSON.stringify(defaultValues.brand) === JSON.stringify(watchAll.brand) &&
      JSON.stringify(defaultValues.categories) ===
        JSON.stringify(watchAll.categories) &&
      JSON.stringify(defaultValues.isSellable) ===
        JSON.stringify(watchAll.isSellable) &&
      JSON.stringify(defaultValues.isTrackable) ===
        JSON.stringify(watchAll.isTrackable) &&
      JSON.stringify(defaultValues.name) === JSON.stringify(watchAll.name) &&
      JSON.stringify(defaultValues.publishedDate) ===
        JSON.stringify(watchAll.publishedDate) &&
      JSON.stringify(defaultValues.status) ===
        JSON.stringify(watchAll.status) &&
      JSON.stringify(defaultValues.statusSettings) ===
        JSON.stringify(watchAll.statusSettings) &&
      JSON.stringify(defaultValues.supplier) ===
        JSON.stringify(watchAll.supplier) &&
      JSON.stringify(defaultValues.allowListingOnMobile) ===
        JSON.stringify(watchAll.allowListingOnMobile) &&
      JSON.stringify(defaultValues.isSyncingDescription) ===
        JSON.stringify(watchAll.isSyncingDescription) &&
      JSON.stringify(defaultValues.isSyncingImages) ===
        JSON.stringify(watchAll.isSyncingImages) &&
      JSON.stringify(defaultValues.isSyncingCategories) ===
        JSON.stringify(watchAll.isSyncingCategories);
    if (isVariantModified && isProductModified && !files && !imagesToDetach) {
      setIsAnythingModified(false);
    } else {
      setIsAnythingModified(true);
    }
  }, [
    JSON.stringify(defaultValues),
    JSON.stringify(watchAll),
    files,
    imagesToDetach,
  ]);

  return { isAnythingModified, setIsAnythingModified };
};
