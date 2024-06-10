import {
  createContext,
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApiKeyApiType } from "../../../../../util/types";
import { useGetApiKeys } from "../../../hooks/useGetApiKeys";

interface IApiKeysContext {
  apiKeysData: ApiKeyApiType[];
  refreshApiKeysData: () => void;
  setApiKeysFilters: (filters: Record<string, any>) => void;
  loading: boolean;
}

const ApiKeysContext = createContext<IApiKeysContext>({
  apiKeysData: [],
  loading: false,
  setApiKeysFilters: () => null,
  refreshApiKeysData: () => null,
});

export const ApiKeysContextProvider: FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [filters, setFilters] = useState({});
  const { data, loading, refresh } = useGetApiKeys(filters);
  const [apiKeysData, setApiKeysData] = useState<ApiKeyApiType[]>([]);

  useEffect(() => {
    if (data?.length > 0) setApiKeysData(data);
  }, [data]);

  return (
    <ApiKeysContext.Provider
      value={{
        apiKeysData,
        refreshApiKeysData: refresh,
        loading,
        setApiKeysFilters: setFilters,
      }}
    >
      {children}
    </ApiKeysContext.Provider>
  );
};

export const useApiKeysContext = () => {
  return useContext(ApiKeysContext);
};
