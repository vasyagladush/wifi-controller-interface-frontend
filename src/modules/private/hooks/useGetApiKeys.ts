import { useEffect, useState } from "react";
import { ApiKeyApiType } from "../../../util/types";
import api from "../../../util/api";

export const useGetApiKeys = (filters?: Record<string, any>) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiKeyApiType[]>([]);

  const getApiKeys = async () => {
    try {
      setLoading(true);
      const result: Array<any> = [];
      //  checkAccessByPolicies(
      //   [Policies.API_KEY.ADMIN_ACCESS],
      //   [Policies.API_KEY.VIEW_API_KEYS]
      // )
      //   ?
      // await api.getApiKeys(filters)
      // :

      setData(result);
    } catch (e: any) {
      console.error(e);
    }
    setLoading(false);
  };

  const refresh = () => {
    getApiKeys();
  };

  useEffect(() => {
    if (filters) getApiKeys();
  }, [filters]);

  useEffect(() => {
    getApiKeys();
  }, []);

  return { data, loading, refresh };
};
