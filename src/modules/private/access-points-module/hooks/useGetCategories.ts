import { useEffect, useState } from "react";
import Api from "../../../../util/api";
import { CategoryApiType } from "../../../../util/types";

interface IFilters {
  createdBy?: string;
  searchKeyword?: string;
  limit?: number;
}

export const useGetCategories = (
  filters: IFilters = {},
  sort = { field: "createdAt", direction: "DESC" }
) => {
  // const { checkAccessByPolicies } = usePolicyCheck();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CategoryApiType[]>([]);
  const [totalDocs, setTotalDocs] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(filters?.limit ?? 25);

  const getCategories = async () => {
    setLoading(true);
    const result = {docs: [], totalDocs: 0};
    // checkAccessByPolicies(
    //   [Policies.CATEGORY.ADMIN_ACCESS],
    //   [Policies.CATEGORY.VIEW_CATEGORIES]
    // )
      // ? await Api.getCategories({
      //     ...filters,
      //     page,
      //     limit,
      //     sort: sort.field,
      //     sortDirection: sort.direction,
      //   })
      // : [];
   
    setData(result.docs);
    setTotalDocs(result.totalDocs);
    setLoading(false);
  };

  const onPaginationChange = (pageValue: number, limitValue: number) => {
    setPage(pageValue);
    setLimit(limitValue);
  };

  useEffect(() => {
    getCategories();
  }, [
    page,
    limit,
    filters?.createdBy,
    filters?.searchKeyword,
    sort?.field,
    sort?.direction,
  ]);

  const refreshCategories = () => {
    getCategories();
  };

  return {
    loading,
    refreshCategories,
    data,
    totalDocs,
    page,
    limit,
    onPaginationChange,
  };
};
