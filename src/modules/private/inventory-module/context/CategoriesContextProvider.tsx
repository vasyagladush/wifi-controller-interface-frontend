import {
  createContext,
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGetCategories } from "../hooks/useGetCategories";
import { CategoryApiType } from "../../../../util/types";
import { ISortConfig } from "../../../../components/ui-kit/ReactTable/context/TableContext";

interface ICategoriesContext {
  categories: CategoryApiType[];
  refreshCategories: () => void;
  setCategoriesFilters: (filters: Record<string, any>) => void;
  onSortChange: (val?: ISortConfig) => void;
  loading: boolean;
  onPaginationChange: (pageValue: number, limitValue: number) => void;
  totalDocs: number;
  page: number;
  limit: number;
}

const CategoriesContext = createContext<ICategoriesContext>({
  categories: [],
  refreshCategories: () => null,
  setCategoriesFilters: () => null,
  onSortChange: () => null,
  loading: false,
  onPaginationChange: () => null,
  totalDocs: 0,
  page: 1,
  limit: 25,
});

export const CategoriesContextProvider: FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [filters, setFilters] = useState({});
  const [categories, setCategories] = useState<CategoryApiType[]>([]);
  const [sort, setSort] = useState<ISortConfig>();
  const {
    data,
    refreshCategories,
    loading,
    totalDocs,
    page,
    limit,
    onPaginationChange,
  } = useGetCategories(filters, sort);

  useEffect(() => {
    setCategories(data);
  }, [data]);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        refreshCategories,
        setCategoriesFilters: setFilters,
        onSortChange: setSort,
        totalDocs,
        page,
        limit,
        onPaginationChange,
        loading,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};
