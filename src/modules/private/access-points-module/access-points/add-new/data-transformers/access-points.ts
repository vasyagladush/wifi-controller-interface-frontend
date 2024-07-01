import { components } from "../../../../../../util/backend-api-types";
import {} from "../../../../../../util/types";
import { AccessPointFormValues, NetworkFormValues } from "../types";
import { DateTime } from "luxon";

const collectValues = (values: AccessPointFormValues) => {
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
  values: AccessPointFormValues,
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
  values: AccessPointFormValues
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
) => Partial<AccessPointFormValues> = (accessPoint) => {
  return {
    name: accessPoint.name,
    deviceId: accessPoint.deviceId,
    ip: accessPoint.ip,
    network: undefined,
  };
};

export const transformNetworkServerInputToFormValues: (
  accessPointNetwork: components["schemas"]["NetworkGigaSchema"]
) => NetworkFormValues = (network) => {
  return {
    id: String(network.id),
    name: network.name,
    ssid: network.ssid,
    countryCode: network.countryCode,
    wireless: {
      vht: network.wireless[0].vht,
      acs: network.wireless[0].acs,
      beaconInterval: network.wireless[0].beaconInterval,
      rtsCtsThreshold: network.wireless[0].rtsCtsThreshold,
    },
    security: {
      wirelessSecurityType: String(network.security[0].wirelessSecurityType),
      radius: network.security[0].radius,
      eap: network.security[0].eap,
      macACLType: String(network.security[0].macAclType),
      macACLs: network.security[0].macAcls,
    },
  };
};
