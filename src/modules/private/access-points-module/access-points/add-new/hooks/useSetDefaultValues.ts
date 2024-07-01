import { useMemo } from "react";
import { NewAccessPointFormValues, NetworkFormValues } from "../types";

export const useSetDefaultValues = (
  accessPointInfo?: Partial<NewAccessPointFormValues>,
  currentNetwork?: NetworkFormValues,
  editing?: boolean
) => {
  const defaultValues = useMemo(() => {
    return {
      name: accessPointInfo?.name ?? "",
      deviceId: accessPointInfo?.deviceId ?? 0,
      ip: accessPointInfo?.ip ?? "",
      network: {
        id: currentNetwork?.id ?? 0,
        name: currentNetwork?.name ?? "",
        ssid: currentNetwork?.ssid ?? "",
        countryCode: currentNetwork?.countryCode ?? "",
        wireless: {
          vht: currentNetwork?.wireless?.vht ?? false,
          acs: currentNetwork?.wireless?.acs ?? false,
          beaconInterval: currentNetwork?.wireless?.beaconInterval ?? 0,
          rtsCtsThreshold: currentNetwork?.wireless?.rtsCtsThreshold ?? 0,
        },
        security: {
          wirelessSecurityType:
            currentNetwork?.security?.wirelessSecurityType ?? 0, // TYPE-TODO: add enum from backend types
          radius: currentNetwork?.security?.radius ?? "",
          eap: currentNetwork?.security?.eap ?? "",
          macACLType: currentNetwork?.security?.macACLType ?? 0, // TYPE-TODO: add enum from backend types
          macACLs: currentNetwork?.security?.macACLs ?? [],
        },
      },
    };
  }, [accessPointInfo, currentNetwork]);

  return { defaultValues };
};
