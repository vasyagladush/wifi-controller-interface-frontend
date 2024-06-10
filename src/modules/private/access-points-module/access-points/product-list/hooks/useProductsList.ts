import { ProductApiType } from "../../../../../../util/types";
import { useEffect, useState } from "react";
import api from "../../../../../../util/api";

export interface ProductsFilters {
  category?: string;
  status?: string;
  source?: string;
  searchKeyword?: string;
  brands?: string;
  supplier?: string;
  amountFrom?: string;
  amountTo?: string;
  from?: string;
  to?: string;
  createdBy?: string;
  priceFrom?: string;
  priceTo?: string;
  soldFrom?: string;
  soldTo?: string;
  qtyFrom?: string;
  qtyTo?: string;
  publishedFrom?: string;
  publishedTo?: string;
  inventoryStatus?: string;
  showDeleted?: string | null;
  hasWholeSalePrice?: boolean;
}

export const useProductsList = (
  page = 1,
  limit = 25,
  filter?: ProductsFilters,
  inventoryStatus?: string,
  sort = { field: "createdAt", direction: "DESC" }
) => {
  // const { checkAccessByPolicies } = usePolicyCheck();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [productsData, setProductsData] = useState<ProductApiType[]>([]);
  const [totalDocs, setTotalDocs] = useState(0);

  const getProductList = async () => {
    try {
      setLoading(true);
      // transform the filters object to server format
      const result = {docs: [], totalDocs: 0}
      // checkAccessByPolicies(
      //   [Policies.PRODUCT.ADMIN_ACCESS],
      //   [Policies.PRODUCT.VIEW_PRODUCTS]
      // )
      //   ? await api.getProducts(
      //       page,
      //       limit,
      //       status,
      //       {
      //         sort: sort?.field,
      //         sortDirection: sort?.direction,
      //         ...filter,
      //       },
      //       inventoryStatus
      //     )
      //   : 
      //   [];
      if (result) {
        setProductsData(result.docs);
        setTotalDocs(result.totalDocs);
      }
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      setError(e);
    }
  };

  useEffect(() => {
    getProductList();
  }, [
    page,
    limit,
    status,
    filter?.status,
    filter?.inventoryStatus,
    filter?.amountFrom,
    filter?.amountTo,
    filter?.from,
    filter?.to,
    filter?.createdBy,
    filter?.supplier,
    filter?.searchKeyword,
    filter?.category,
    filter?.brands,
    filter?.priceFrom,
    filter?.priceTo,
    filter?.soldFrom,
    filter?.soldTo,
    filter?.qtyFrom,
    filter?.qtyTo,
    filter?.publishedFrom,
    filter?.publishedTo,
    filter?.showDeleted,
    filter?.hasWholeSalePrice,
    sort?.field,
    sort?.direction,
    inventoryStatus,
  ]);

  return {
    loading,
    getProductList,
    productsData,
    totalDocs,
    error,
    refresh: getProductList,
  };
};
