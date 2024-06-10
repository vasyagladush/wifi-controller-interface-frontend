import { useState, useEffect } from "react";

export const useInternalFilter = (externalData?: any) => {
  const [initialData, setInitialData] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [appliedFilters, setAppliedFilters] = useState<any>(null);

  useEffect(() => {
    if (externalData) {
      setInitialData(externalData);
      applyFilters(externalData, appliedFilters);
    }
  }, [externalData, appliedFilters]);

  const applyFilters = (dataToFilter: any, filters: any) => {
    let filteredData = [...dataToFilter];

    if (filters) {
      if (filters.searchKeyword && filters.searchKeyword !== "") {
        filteredData = filteredData.filter((el: any) => {
          return (
            el?.name
              ?.toLowerCase()
              ?.includes(filters?.searchKeyword?.toLowerCase()) ||
            el?.email
              ?.toLowerCase()
              ?.includes(filters?.searchKeyword?.toLowerCase())
          );
        });
      }

      if (filters.createdBy) {
        filteredData = filteredData.filter((el: any) => {
          return el.createdBy
            .toLowerCase()
            .includes(filters.createdBy.toLowerCase());
        });
      }

      if (filters.from || filters.to) {
        filteredData = filteredData.filter((el: any) => {
          const createdAt = new Date(el.createdAt).getTime();

          if (filters.from && createdAt < new Date(filters.from).getTime()) {
            return false;
          }

          if (filters.to && createdAt > new Date(filters.to).getTime()) {
            return false;
          }

          return true;
        });
      }
    }

    setData(filteredData);
  };

  const filterData = (params: any) => {
    setAppliedFilters(params);
    applyFilters(initialData, params);
  };

  const setAllData = (newData: any) => {
    setInitialData(newData);
    applyFilters(newData, appliedFilters);
  };

  return {
    filterData,
    filteredData: data,
    setFilterData: setAllData,
    setInitialData,
  };
};
