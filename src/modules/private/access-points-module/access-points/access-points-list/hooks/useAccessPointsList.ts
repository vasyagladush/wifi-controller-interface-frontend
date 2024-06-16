import { useEffect, useState } from "react";
import api from "../../../../../../util/api";
import { components } from "../../../../../../util/backend-api-types";

export interface AccessPointsFilters {
  name?: string;
}

export const useAccessPointsList = (
  page = 1,
  limit = 25,
  filter?: AccessPointsFilters,
  sort = { field: "id", direction: "DESC" }
) => {
  // const { checkAccessByPolicies } = usePolicyCheck();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [accessPointsData, setAccessPointsData] = useState<
    Array<components["schemas"]["APSchema"]>
  >([]);
  const [totalDocs, setTotalDocs] = useState(0);

  const getAccessPointsList = async () => {
    try {
      setLoading(true);

      const result = await api.getAccessPoints(page, limit, {
        // sort: sort?.field,
        // sortDirection: sort?.direction,
        ...filter,
      });

      if (result) {
        setAccessPointsData(result.docs);
        setTotalDocs(result.totalDocs);
      }
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      setError(e);
    }
  };

  useEffect(() => {
    getAccessPointsList();
  }, [
    page,
    limit,
    filter?.name,
    // sort?.field,
    // sort?.direction,
  ]);

  return {
    loading,
    getAccessPointsList,
    accessPointsData,
    totalDocs,
    error,
    refresh: getAccessPointsList,
  };
};
