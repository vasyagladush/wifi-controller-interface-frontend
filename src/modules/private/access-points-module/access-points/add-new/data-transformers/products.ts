import {
  ProductApiType,
  ProductVariantApiType,
} from "../../../../../../util/types";
import { NewProductFormValues, ProductVariantFormValues } from "../types";
import { DateTime } from "luxon";

const collectValues = (values: NewProductFormValues) => {
  const pricing: any = {
    cost: values.variant.pricing.cost
      ? Number(values.variant.pricing.cost).toFixed(2)
      : undefined,
    markup: values.variant.pricing.markup
      ? Number(values.variant.pricing.markup)
      : 0,
    minOrderQty: Number(values.variant.pricing.minOrderQty),
    maxOrderQty: Number(values.variant.pricing.maxOrderQty),
    VAT: Number(values.variant.pricing.VAT),
    price: values.variant.pricing.price,
    wholeSalePrice: !values.variant.pricing.wholeSalePrice
      ? undefined
      : Number(values.variant.pricing.wholeSalePrice)?.toFixed(2),
    wholeSaleQty: !values.variant.pricing.wholeSaleQty
      ? undefined
      : Number(values.variant.pricing.wholeSaleQty),
    isClientBasedPrice: false,
    priceWithVAT: Number(values.variant.pricing.priceWithVAT).toFixed(2),
    discounts: [],
  };

  const deliveryInfo: any = {
    height: values.variant.deliveryInfo.height,
    heightUnit: values.variant.deliveryInfo.heightUnit,
    width: values.variant.deliveryInfo.width,
    widthUnit: values.variant.deliveryInfo.widthUnit,
    length: values.variant.deliveryInfo.length,
    lengthUnit: values.variant.deliveryInfo.lengthUnit,
    weight: values.variant.deliveryInfo.weight,
    weightUnit: values.variant.deliveryInfo.weightUnit,
    volume: values.variant.deliveryInfo.volume,
    volumeUnit: values.variant.deliveryInfo.volumeUnit,
    packagingItems: values.variant.deliveryInfo.packagingItems
      ? Number(values.variant.deliveryInfo.packagingItems)
      : 1,
    deliveryTime: values.variant.deliveryInfo.deliveryTime,
  };

  const inventoryInfo: any = {
    barcode: values.variant.inventoryInfo.barcode,
    qty: values.variant.inventoryInfo.qty
      ? Number(values.variant.inventoryInfo.qty)
      : 0,
    committedQty: 0,
    room: values.variant.inventoryInfo.room,
    shelf: values.variant.inventoryInfo.shelf,
    reservedQty: Number(values.variant.inventoryInfo.reservedQty),
    soldCount: Number(values.variant.inventoryInfo.soldCount),
    status: values.variant.inventoryInfo.status,
    incomingQty: 0, // ?
  };

  return { pricing, deliveryInfo, inventoryInfo };
};

export const transformProductWithVariantFormValuesToServer: (
  values: NewProductFormValues,
  isUpdate?: boolean
) => Partial<any> = (values, isUpdate) => {
  const { pricing, inventoryInfo, deliveryInfo } = collectValues(values);

  const integrationsIds = values?.availableIntegrationsSetup?.flatMap(
    ([, integrations]) =>
      integrations.filter((el) => el.enabled).map((el) => el.id)
  );

  const forSubmit = {
    name: values.name,
    categories: values?.categories
      ?.filter((c) => c.category)
      .map((filtered) => filtered.category),
    publishedDate: values.publishedDate?.toJSDate(),
    status: values.status,
    isTrackable: values.isTrackable,
    isSellable: values.isSellable,
    availableIntegrationsSetupIds: integrationsIds,
    allowListingOnMobile: values.allowListingOnMobile,
    isSyncingDescription: values.isSyncingDescription,
    isSyncingImages: values.isSyncingImages,
    isSyncingCategories: values.isSyncingCategories,
  };

  const variant = {
    pricing,
    sku: values.variant.sku,
    description: values.variant.description,
    shortDescription: values.variant.shortDescription,
    hsCode: values.variant.hsCode,
    simpleDescription: values.variant.simpleDescription,
    inventoryInfo,
    deliveryInfo,
  };

  values.isTrackable &&
    Object.assign(forSubmit, {
      statusSettings: {
        low: values.statusSettings?.lowStockThreshold,
        high: values.statusSettings?.highStockThreshold,
      },
    });

  values.supplier &&
    Object.assign(forSubmit, {
      supplier: values.supplier,
    });

  values.brand &&
    Object.assign(forSubmit, {
      brand: values.brand,
    });

  !isUpdate &&
    Object.assign(forSubmit, {
      variants: [variant],
    });

  return forSubmit;
};

export const transformVariantToServerInput: (
  values: NewProductFormValues
) => Partial<ProductVariantApiType> = (values) => {
  const { pricing, inventoryInfo, deliveryInfo } = collectValues(values);

  const variant = {
    pricing,
    sku: values.variant.sku,
    description: values.variant.description,
    shortDescription: values.variant.shortDescription,
    hsCode: values.variant.hsCode,
    simpleDescription: values.variant.simpleDescription,
    inventoryInfo,
    deliveryInfo,
  };
  return variant;
};

export const transformProductServerInputToFormValues: (
  product: ProductApiType
) => Partial<NewProductFormValues> = (product) => {
  return {
    name: product.name,
    categories: product.categories
      ? product.categories.map((c: any) => ({ category: c._id }))
      : [{ category: undefined }],
    supplier: product.supplier?._id,
    brand: product.brand as any,
    publishedDate: DateTime.fromISO(String(product.publishedDate)),
    status: product.status,
    statusSettings: {
      lowStockThreshold: product.statusSettings?.low,
      highStockThreshold: product.statusSettings?.high,
    },
    isSellable: product?.isSellable,
    isTrackable: product?.isTrackable,
    availableIntegrationsSetup: (product as any).availableIntegrationsSetup,
    connectedIntegrations: product.connectedIntegrations,
    options: product.options,
    isSyncingDescription: (product as any)?.isSyncingDescription,
    isSyncingImages: (product as any)?.isSyncingImages,
    isSyncingCategories: (product as any)?.isSyncingCategories,
    allowListingOnMobile: (product as any)?.allowListingOnMobile,
  };
};

export const transformVariantServerInputToFormValues: (
  productVariant: ProductVariantApiType
) => ProductVariantFormValues = (productVariant) => {
  return {
    _id: productVariant?._id,
    sku: productVariant?.sku,
    description: productVariant?.description ?? "",
    shortDescription: productVariant?.shortDescription ?? "",
    simpleDescription: productVariant?.simpleDescription ?? "",
    hsCode: productVariant?.hsCode ?? "",
    images: productVariant?.images ?? [],
    productOptionConfig: productVariant?.productOptionConfig,
    pricing: {
      cost: productVariant?.pricing?.cost ?? "",
      markup: productVariant?.pricing?.markup
        ? productVariant?.pricing?.markup?.toString()
        : "",
      minOrderQty: productVariant?.pricing?.minOrderQty
        ? productVariant?.pricing?.minOrderQty.toString()
        : "",
      maxOrderQty: productVariant?.pricing?.maxOrderQty
        ? productVariant.pricing?.maxOrderQty?.toString()
        : "",
      VAT: productVariant?.pricing?.VAT
        ? productVariant?.pricing?.VAT.toString()
        : "0",
      price: productVariant?.pricing?.price,
      wholeSalePrice: productVariant?.pricing?.wholeSalePrice,
      wholeSaleQty: productVariant?.pricing?.wholeSaleQty
        ? productVariant.pricing?.wholeSaleQty?.toString()
        : "",
      isClientBasedPrice: productVariant?.pricing?.isClientBasedPrice,
      priceWithVAT: productVariant?.pricing?.priceWithVAT,
    },

    deliveryInfo: {
      height: productVariant?.deliveryInfo?.height,
      heightUnit: productVariant?.deliveryInfo?.heightUnit,
      width: productVariant?.deliveryInfo?.width,
      widthUnit: productVariant?.deliveryInfo?.widthUnit,
      length: productVariant?.deliveryInfo?.length,
      lengthUnit: productVariant?.deliveryInfo?.lengthUnit,
      weight: productVariant?.deliveryInfo?.weight,
      weightUnit: productVariant?.deliveryInfo?.weightUnit,
      volume: productVariant?.deliveryInfo?.volume ?? "",
      volumeUnit: productVariant?.deliveryInfo?.volumeUnit ?? "mm",
      packagingItems: productVariant?.deliveryInfo?.packagingItems
        ? productVariant.deliveryInfo?.packagingItems?.toString()
        : "",
      deliveryTime: productVariant?.deliveryInfo?.deliveryTime,
    },

    inventoryInfo: {
      barcode: productVariant?.inventoryInfo?.barcode,
      qty: productVariant?.inventoryInfo?.qty
        ? productVariant?.inventoryInfo?.qty?.toString()
        : "",
      room: productVariant?.inventoryInfo?.room,
      shelf: productVariant?.inventoryInfo?.shelf,
      reservedQty: productVariant?.inventoryInfo?.reservedQty
        ? productVariant?.inventoryInfo?.reservedQty?.toString()
        : "",
      soldCount: productVariant?.inventoryInfo?.soldCount
        ? productVariant?.inventoryInfo?.soldCount?.toString()
        : "",
      status: productVariant?.inventoryInfo?.status,
    },
  };
};
