import Api from "../../../../../../util/api";
import { useEffect, useState } from "react";
import { transformAccessPointServerInputToFormValues } from "../data-transformers/access-points";
// import { ImageAttachmentApiType } from "../../../../../../util/types";
import { NewAccessPointFormValues } from "../types";

export const useGetAccessPoint = (id?: string) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<any[]>([]);
  const [accessPointInfo, setAccessPointInfo] =
    useState<Partial<NewAccessPointFormValues>>();
  const getAccessPointInfo = async () => {
    try {
      setLoading(true);
      if (id) {
        // const result = await Api.getAccessPoint(id);

     
        // const formatted = transformAccessPointServerInputToFormValues(result);
        setLoading(false);
        // setAccessPointInfo(formatted);
        setAccessPointInfo({});
      }
    } catch (e: any) {
      console.error(e);
    }
  };
  useEffect(() => {
    getAccessPointInfo();
  }, [id]);
  return {
    accessPointInfo,
    loading,
    refreshAccessPointInfo: getAccessPointInfo,
  };
};
