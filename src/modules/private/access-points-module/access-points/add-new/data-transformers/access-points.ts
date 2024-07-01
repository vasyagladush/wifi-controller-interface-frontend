import { components } from "../../../../../../util/backend-api-types";
import {
 
} from "../../../../../../util/types";
import { NewAccessPointFormValues, NetworkFormValues } from "../types";
import { DateTime } from "luxon";

const collectValues = (values: NewAccessPointFormValues) => {
  // const pricing: any = {
  //   cost: values.network.pricing.cost
  //     ? Number(values.network.pricing.cost).toFixed(2)
  //     : undefined,
  //   markup: values.network.pricing.markup
  //     ? Number(values.network.pricing.markup)
  //     : 0,
  //   minOrderQty: Number(values.network.pricing.minOrderQty),
  //   maxOrderQty: Number(values.network.pricing.maxOrderQty),
  //   VAT: Number(values.network.pricing.VAT),
  //   price: values.network.pricing.price,
  //   wholeSalePrice: !values.network.pricing.wholeSalePrice
  //     ? undefined
  //     : Number(values.network.pricing.wholeSalePrice)?.toFixed(2),
  //   wholeSaleQty: !values.network.pricing.wholeSaleQty
  //     ? undefined
  //     : Number(values.network.pricing.wholeSaleQty),
  //   isClientBasedPrice: false,
  //   priceWithVAT: Number(values.network.pricing.priceWithVAT).toFixed(2),
  //   discounts: [],
  // };

  // const deliveryInfo: any = {
  //   height: values.network.deliveryInfo.height,
  //   heightUnit: values.network.deliveryInfo.heightUnit,
  //   width: values.network.deliveryInfo.width,
  //   widthUnit: values.network.deliveryInfo.widthUnit,
  //   length: values.network.deliveryInfo.length,
  //   lengthUnit: values.network.deliveryInfo.lengthUnit,
  //   weight: values.network.deliveryInfo.weight,
  //   weightUnit: values.network.deliveryInfo.weightUnit,
  //   volume: values.network.deliveryInfo.volume,
  //   volumeUnit: values.network.deliveryInfo.volumeUnit,
  //   packagingItems: values.network.deliveryInfo.packagingItems
  //     ? Number(values.network.deliveryInfo.packagingItems)
  //     : 1,
  //   deliveryTime: values.network.deliveryInfo.deliveryTime,
  // };

  // const inventoryInfo: any = {
  //   barcode: values.network.inventoryInfo.barcode,
  //   qty: values.network.inventoryInfo.qty
  //     ? Number(values.network.inventoryInfo.qty)
  //     : 0,
  //   committedQty: 0,
  //   room: values.network.inventoryInfo.room,
  //   shelf: values.network.inventoryInfo.shelf,
  //   reservedQty: Number(values.network.inventoryInfo.reservedQty),
  //   soldCount: Number(values.network.inventoryInfo.soldCount),
  //   status: values.network.inventoryInfo.status,
  //   incomingQty: 0, // ?
  // };

  // return { pricing, deliveryInfo, inventoryInfo };
  // TODO: update
  return {};
};

export const transformAPWithNetworkFormValuesToServer: (
  values: NewAccessPointFormValues,
  isUpdate?: boolean
) => Partial<any> = (values, isUpdate) => {
  // const { pricing, inventoryInfo, deliveryInfo } = collectValues(values);

  // const forSubmit = {
  //   name: values.name,
  //   deviceId: values.deviceId,
  //   ip: values.ip,
  // };

  // const network = {
  //   pricing,
  //   sku: values.network.sku,
  //   description: values.network.description,
  //   shortDescription: values.network.shortDescription,
  //   hsCode: values.network.hsCode,
  //   simpleDescription: values.network.simpleDescription,
  //   inventoryInfo,
  //   deliveryInfo,
  // };

  // !isUpdate &&
  //   Object.assign(forSubmit, {
  //     networks: [network],
  //   });

  // return forSubmit;
  // TODO: update
  return {};
};

export const transformNetworkToServerInput: (
  values: NewAccessPointFormValues
) => Partial<any> = (values) => {
  // const { pricing, inventoryInfo, deliveryInfo } = collectValues(values);

  // const network = {
  //   pricing,
  //   sku: values.network.sku,
  //   description: values.network.description,
  //   shortDescription: values.network.shortDescription,
  //   hsCode: values.network.hsCode,
  //   simpleDescription: values.network.simpleDescription,
  //   inventoryInfo,
  //   deliveryInfo,
  // };
  // return network;
  // TODO: update
  return {};
};

export const transformAccessPointServerInputToFormValues: (
  accessPoint: components["schemas"]["APSchema"]
) => Partial<NewAccessPointFormValues> = (accessPoint) => {
  return {
    name: accessPoint.name,
    deviceId: accessPoint.deviceId,
    ip: accessPoint.ip,
    network: undefined
  };
};

export const transformNetworkServerInputToFormValues: (
  accessPointNetwork: components['schemas']['APSchema']['networks'][number]
) => NetworkFormValues = (network) => {
  // TODO: update
  return {
    // _id: accessPointNetwork?._id,
    // sku: accessPointNetwork?.sku,
    // description: accessPointNetwork?.description ?? "",
    // shortDescription: accessPointNetwork?.shortDescription ?? "",
    // simpleDescription: accessPointNetwork?.simpleDescription ?? "",
    // hsCode: accessPointNetwork?.hsCode ?? "",
    // images: accessPointNetwork?.images ?? [],
    // accessPointOptionConfig: accessPointNetwork?.accessPointOptionConfig,
    // pricing: {
    //   cost: accessPointNetwork?.pricing?.cost ?? "",
    //   markup: accessPointNetwork?.pricing?.markup
    //     ? accessPointNetwork?.pricing?.markup?.toString()
    //     : "",
    //   minOrderQty: accessPointNetwork?.pricing?.minOrderQty
    //     ? accessPointNetwork?.pricing?.minOrderQty.toString()
    //     : "",
    //   maxOrderQty: accessPointNetwork?.pricing?.maxOrderQty
    //     ? accessPointNetwork.pricing?.maxOrderQty?.toString()
    //     : "",
    //   VAT: accessPointNetwork?.pricing?.VAT
    //     ? accessPointNetwork?.pricing?.VAT.toString()
    //     : "0",
    //   price: accessPointNetwork?.pricing?.price,
    //   wholeSalePrice: accessPointNetwork?.pricing?.wholeSalePrice,
    //   wholeSaleQty: accessPointNetwork?.pricing?.wholeSaleQty
    //     ? accessPointNetwork.pricing?.wholeSaleQty?.toString()
    //     : "",
    //   isClientBasedPrice: accessPointNetwork?.pricing?.isClientBasedPrice,
    //   priceWithVAT: accessPointNetwork?.pricing?.priceWithVAT,
    // },

    // deliveryInfo: {
    //   height: accessPointNetwork?.deliveryInfo?.height,
    //   heightUnit: accessPointNetwork?.deliveryInfo?.heightUnit,
    //   width: accessPointNetwork?.deliveryInfo?.width,
    //   widthUnit: accessPointNetwork?.deliveryInfo?.widthUnit,
    //   length: accessPointNetwork?.deliveryInfo?.length,
    //   lengthUnit: accessPointNetwork?.deliveryInfo?.lengthUnit,
    //   weight: accessPointNetwork?.deliveryInfo?.weight,
    //   weightUnit: accessPointNetwork?.deliveryInfo?.weightUnit,
    //   volume: accessPointNetwork?.deliveryInfo?.volume ?? "",
    //   volumeUnit: accessPointNetwork?.deliveryInfo?.volumeUnit ?? "mm",
    //   packagingItems: accessPointNetwork?.deliveryInfo?.packagingItems
    //     ? accessPointNetwork.deliveryInfo?.packagingItems?.toString()
    //     : "",
    //   deliveryTime: accessPointNetwork?.deliveryInfo?.deliveryTime,
    // },

    // inventoryInfo: {
    //   barcode: accessPointNetwork?.inventoryInfo?.barcode,
    //   qty: accessPointNetwork?.inventoryInfo?.qty
    //     ? accessPointNetwork?.inventoryInfo?.qty?.toString()
    //     : "",
    //   room: accessPointNetwork?.inventoryInfo?.room,
    //   shelf: accessPointNetwork?.inventoryInfo?.shelf,
    //   reservedQty: accessPointNetwork?.inventoryInfo?.reservedQty
    //     ? accessPointNetwork?.inventoryInfo?.reservedQty?.toString()
    //     : "",
    //   soldCount: accessPointNetwork?.inventoryInfo?.soldCount
    //     ? accessPointNetwork?.inventoryInfo?.soldCount?.toString()
    //     : "",
    //   status: accessPointNetwork?.inventoryInfo?.status,
    // },
  } as any; // TODO: remove as any
};
