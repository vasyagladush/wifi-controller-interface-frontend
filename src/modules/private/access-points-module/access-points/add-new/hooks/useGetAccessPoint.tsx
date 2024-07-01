import Api from "../../../../../../util/api";
import { useEffect, useState } from "react";
import { transformAccessPointServerInputToFormValues } from "../data-transformers/access-points";
import { AccessPointFormValues } from "../types";

export const useGetAccessPoint = (id?: string) => {
  const [loading, setLoading] = useState(false);
  const [accessPointBackendInfo, setAccessPointBackendInfo] =
    useState<Awaited<ReturnType<typeof Api.getAccessPoint>>>();
  const [accessPointFormInfo, setAccessPointFormInfo] =
    useState<Partial<AccessPointFormValues>>();
  const getAccessPointInfo = async () => {
    try {
      setLoading(true);
      if (id) {
        await new Promise((r) => setTimeout(r, 5000));
        const result = await Api.getAccessPoint(id);
        const formatted = transformAccessPointServerInputToFormValues(result!);
        setLoading(false);
        setAccessPointBackendInfo(result);
        setAccessPointFormInfo(formatted);
      }
    } catch (e: any) {
      console.error(e);
    }
  };
  useEffect(() => {
    getAccessPointInfo();
  }, [id]);
  return {
    accessPointFormInfo,
    accessPointBackendInfo,
    loading,
    refreshAccessPointInfo: getAccessPointInfo,
  };
};
