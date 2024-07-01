import { useEffect, useState } from "react";
import { AccessPointFormValues } from "../types";

export const useCheckModified = (
  defaultValues: Partial<AccessPointFormValues>,
  watchAll: AccessPointFormValues
) => {
  const [isAnythingModified, setIsAnythingModified] = useState(false);

  useEffect(() => {
    const isNetworkModified =
      JSON.stringify(defaultValues.network) ===
      JSON.stringify(watchAll.network);

    const isAccessPointModified =
      JSON.stringify(defaultValues.name) === JSON.stringify(watchAll.name) &&
      JSON.stringify(defaultValues.deviceId) ===
        JSON.stringify(watchAll.deviceId) &&
      JSON.stringify(defaultValues.ip) === JSON.stringify(watchAll.ip);

    if (isNetworkModified && isAccessPointModified) {
      setIsAnythingModified(false);
    } else {
      setIsAnythingModified(true);
    }
  }, [JSON.stringify(defaultValues), JSON.stringify(watchAll)]);

  return { isAnythingModified, setIsAnythingModified };
};
