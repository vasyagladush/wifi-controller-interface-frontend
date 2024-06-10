import Api from "../../../../../../util/api";
import { useEffect, useMemo, useState } from "react";
import { ProductVariantApiType } from "../../../../../../util/types";

export const useGetProductVariants = (
  id?: string,
  filter?: any
  // sort = { field: "createdAt", direction: "DESC" }
) => {
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(50);
  const [totalDocs, setTotalDocs] = useState<number>(0);

  const [productVariantsList, setProductVariants] = useState<
    ProductVariantApiType[]
  >([]);

  useMemo(() => {
    return productVariantsList.sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  }, [productVariantsList]);

  const getProductVariants = async () => {
    try {
      setLoading(true);

      // const result = await Api.getProductVariants(id ?? "", page, limit, {
      //   // sort: sort?.field,
      //   // sortDirection: sort?.direction,
      //   ...filter,
      // });
      const result = { docs: [], totalDocs: 0, hasNextPage: false };
      setHasNextPage(result.hasNextPage);
      if (page > 1) {
        setProductVariants((prevVariantsData) => [
          ...prevVariantsData,
          ...result.docs,
        ]);
      } else {
        setProductVariants(result.docs);
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

  const fetchProductVariants = async (pageNumber: number) => {
    try {
      // const result = await Api.getProductVariants(id ?? "", pageNumber, limit, {
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

  const refreshVariantsList = async () => {
    try {
      setLoading(true);

      const newData: any[] = [];
      for (let i = 1; i <= page; i++) {
        const pageData = await fetchProductVariants(i);
        newData.push(...pageData);
      }

      setProductVariants(newData);

      setLoading(false);
    } catch (e: any) {
      console.error(e);

      setLoading(false);
    }
  };

  useEffect(() => {
    getProductVariants();
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
    productVariantsList,
    onPaginationChange,
    hasNextPage,
    totalDocs,
    refreshVariantsList,
    loading,
  };
};
