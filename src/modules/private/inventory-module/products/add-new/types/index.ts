import { DateTime } from "luxon";

export interface ProductIntegrationsSetup {
  id: string;
  name?: string;
  enabled: boolean;
}

export interface ProductVariantFormValues {
  _id: string;
  sku?: string;
  description?: string;
  shortDescription?: string;
  simpleDescription?: string;
  hsCode?: string;
  images: any[];
  productOptionConfig: any[];
  pricing: {
    cost: string;
    markup?: string;
    minOrderQty: string;
    maxOrderQty: string;
    VAT: string;
    price: string;
    wholeSalePrice?: string;
    wholeSaleQty?: string;
    isClientBasedPrice: boolean;
    priceWithVAT: string;
    discounts?: any[];
  };

  deliveryInfo: {
    height?: string;
    heightUnit?: any;
    width?: string;
    widthUnit?: any;
    length?: string;
    lengthUnit?: any;
    weight?: string;
    weightUnit?: any;
    volume: string;
    volumeUnit: any;
    packagingItems?: string;
    deliveryTime?: any;
  };

  inventoryInfo: {
    barcode?: string;
    qty: string;
    room?: string;
    shelf?: string;
    reservedQty: string;
    soldCount: string;
    status: any;
  };
}

export interface NewProductFormValues {
  name: string;
  categories: Array<{ category?: string }> | undefined;
  supplier?: string;
  brand?: string;
  publishedDate: DateTime;
  status: any;
  statusSettings: {
    lowStockThreshold?: number | string;
    highStockThreshold?: number | string;
  };
  isSellable: boolean;
  isTrackable: boolean;
  availableIntegrationsSetup?: Array<[any, ProductIntegrationsSetup[]]>;
  allowListingOnMobile: boolean;
  variant: ProductVariantFormValues;
  options?: any[];
  isSyncingDescription: boolean;
  isSyncingImages: boolean;
  isSyncingCategories: boolean;
}
