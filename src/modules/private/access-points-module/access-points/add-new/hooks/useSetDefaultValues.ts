import { useMemo } from "react";
import { NewProductFormValues, ProductVariantFormValues } from "../types";

export const useSetDefaultValues = (
  productInfo?: Partial<NewProductFormValues>,
  currentVariant?: ProductVariantFormValues,
  editing?: boolean
) => {
  const defaultValues = useMemo(() => {
    return {
      name: productInfo?.name ?? "",
      brand: productInfo?.brand ?? "",
      publishedDate: productInfo?.publishedDate,
      categories:
        editing && productInfo?.categories?.length
          ? productInfo?.categories
          : [{ category: undefined }],

      supplier: productInfo?.supplier ?? "",
      isSellable: productInfo?.isSellable ?? false,
      isTrackable: productInfo?.isTrackable ?? false,
      status: productInfo?.status ?? "active",
      statusSettings: {
        lowStockThreshold: productInfo?.statusSettings?.lowStockThreshold ?? "",
        highStockThreshold:
          productInfo?.statusSettings?.highStockThreshold ?? "",
      },
      availableIntegrationsSetup:
        Object.entries(productInfo?.availableIntegrationsSetup ?? {}) ?? [],
      options: productInfo?.options ?? [],
      allowListingOnMobile: productInfo?.allowListingOnMobile ?? true,
      isSyncingDescription: productInfo?.isSyncingDescription ?? false,
      isSyncingImages: productInfo?.isSyncingImages ?? false,
      isSyncingCategories: productInfo?.isSyncingCategories ?? false,
      variant: {
        _id: currentVariant?._id ?? "",
        description: currentVariant?.description ?? "",
        shortDescription: currentVariant?.shortDescription ?? "",
        sku: currentVariant?.sku ?? "",
        images: currentVariant?.images ?? [],
        productOptionConfig: currentVariant?.productOptionConfig ?? [],
        simpleDescription: currentVariant?.simpleDescription ?? "",
        hsCode: currentVariant?.hsCode ?? "",
        pricing: {
          cost: currentVariant?.pricing.cost ?? "",
          markup: currentVariant?.pricing.markup ?? "",
          minOrderQty: currentVariant?.pricing.minOrderQty ?? "",
          maxOrderQty: currentVariant?.pricing.maxOrderQty ?? "",
          VAT: currentVariant?.pricing.VAT ?? "0",
          price: currentVariant?.pricing.price ?? "",
          wholeSalePrice: currentVariant?.pricing.wholeSalePrice ?? "",
          wholeSaleQty: currentVariant?.pricing.wholeSaleQty ?? "",
          isClientBasedPrice:
            currentVariant?.pricing.isClientBasedPrice ?? false,
          priceWithVAT: currentVariant?.pricing.priceWithVAT ?? "",
          discounts: [],
        },
        deliveryInfo: {
          height: currentVariant?.deliveryInfo?.height,
          heightUnit:
            currentVariant?.deliveryInfo?.heightUnit ??
            "cm",
          width: currentVariant?.deliveryInfo?.width ?? "",
          widthUnit:
            currentVariant?.deliveryInfo?.widthUnit ??
            "cm",
          length: currentVariant?.deliveryInfo?.length ?? "",
          lengthUnit:
            currentVariant?.deliveryInfo?.lengthUnit ??
            "cm",
          weight: currentVariant?.deliveryInfo?.weight ?? "",
          weightUnit:
            currentVariant?.deliveryInfo?.weightUnit ??
            "kg",
          volume: currentVariant?.deliveryInfo?.volume ?? "",
          volumeUnit:
            currentVariant?.deliveryInfo?.volumeUnit ??
            "mm",
          packagingItems: currentVariant?.deliveryInfo?.packagingItems ?? "",
          deliveryTime: currentVariant?.deliveryInfo?.deliveryTime,
        },

        inventoryInfo: {
          barcode: currentVariant?.inventoryInfo.barcode ?? "",
          qty: currentVariant?.inventoryInfo.qty ?? "",
          room: currentVariant?.inventoryInfo.room ?? "",
          shelf: currentVariant?.inventoryInfo.shelf ?? "",
          reservedQty: currentVariant?.inventoryInfo.reservedQty ?? "",
          soldCount: currentVariant?.inventoryInfo.soldCount ?? "",
          status:
            currentVariant?.inventoryInfo.status ??
            "out_of_stock",
        },
      },
    };
  }, [productInfo, currentVariant]);

  return { defaultValues };
};
