import Api from "../../../../../../util/api";
import { useEffect, useMemo, useState } from "react";
import { AccessPointNetworkApiType } from "../../../../../../util/types";

export const useGetAccessPointNetworks = (
  id?: string,
  filter?: any
  // sort = { field: "createdAt", direction: "DESC" }
) => {
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(50);
  const [totalDocs, setTotalDocs] = useState<number>(0);

  const [accessPointNetworksList, setAccessPointNetworks] = useState<
    AccessPointNetworkApiType[]
  >([]);

  useMemo(() => {
    return accessPointNetworksList.sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  }, [accessPointNetworksList]);

  const getAccessPointNetworks = async () => {
    try {
      setLoading(true);

      // const result = await Api.getAccessPointNetworks(id ?? "", page, limit, {
      //   // sort: sort?.field,
      //   // sortDirection: sort?.direction,
      //   ...filter,
      // });
      const result = { docs: [], totalDocs: 0, hasNextPage: false };
      setHasNextPage(result.hasNextPage);
      if (page > 1) {
        setAccessPointNetworks((prevNetworksData) => [
          ...prevNetworksData,
          ...result.docs,
        ]);
      } else {
        setAccessPointNetworks(result.docs);
      }
      setTotalDocs(result.totalDocs);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      console.error(e);
    }
  };

  const onPaginationChange = (pageValue: number, limitValue: number) => {
    setPage(pageValue);
    setLimit(limitValue);
  };

  const fetchAccessPointNetworks = async (pageNumber: number) => {
    try {
      // const result = await Api.getAccessPointNetworks(id ?? "", pageNumber, limit, {
      //   // sort: sort?.field,
      //   // sortDirection: sort?.direction,
      //   ...filter,
      // });
      const result = { docs: [], totalDocs: 0, hasNextPage: false };
      setTotalDocs(result.totalDocs);
      return result.docs;
    } catch (e) {
      console.error(e);
      setTotalDocs(0);
      return [];
    }
  };

  const refreshNetworksList = async () => {
    try {
      setLoading(true);

      const newData: any[] = [];
      for (let i = 1; i <= page; i++) {
        const pageData = await fetchAccessPointNetworks(i);
        newData.push(...pageData);
      }

      setAccessPointNetworks(newData);

      setLoading(false);
    } catch (e: any) {
      console.error(e);

      setLoading(false);
    }
  };

  useEffect(() => {
    getAccessPointNetworks();
  }, [
    id,
    page,
    limit,
    // sort.field,
    // sort.direction,
    filter?.searchKeyword,
    filter?.priceFrom,
    filter?.priceTo,
    filter?.soldFrom,
    filter?.soldTo,
    filter?.qtyFrom,
    filter?.qtyTo,
  ]);

  return {
    accessPointNetworksList,
    onPaginationChange,
    hasNextPage,
    totalDocs,
    refreshNetworksList,
    loading,
  };
};
