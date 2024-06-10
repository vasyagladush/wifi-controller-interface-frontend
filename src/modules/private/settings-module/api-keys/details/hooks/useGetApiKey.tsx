import { useEffect, useState } from "react";
import api from "../../../../../../util/api";
import { ApiKeyFormValues } from "../../create/types";

export const useGetApiKey = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKeyData, setApiKeyData] = useState<ApiKeyFormValues | null>(null);

  const getApiKeyDetails = async () => {
    try {
      setLoading(true);
      // const result = await api.getApiKey(id);
      const result = {data: {}} as any;
      setApiKeyData(result.data);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getApiKeyDetails();
  }, [id]);

  return { loading, apiKeyData, error };
};
