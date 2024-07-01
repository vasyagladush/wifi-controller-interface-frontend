export interface NetworkFormValues {
  id: string;
  name: string;
  ssid?: string;
  countryCode: string;
  wireless: {
    vht: boolean;
    acs: boolean;
    beaconInterval: number;
    rtsCtsThreshold: number;
  };
  security: {
    wirelessSecurityType: number; // TYPE-TODO: add enum from backend types
    radius?: string;
    eap: string;
    macACLType: number; // TYPE-TODO: add enum from backend types
    macACLs: Array<{ macs: Array<string> }>;
  };
}

export interface NewAccessPointFormValues {
  name: string;
  deviceId: number;
  ip: string;
  network: NetworkFormValues;
}
