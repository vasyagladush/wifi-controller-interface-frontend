import { SortingState } from "@tanstack/react-table";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

export interface ISortConfig {
  field: string;
  direction: string;
}
interface ITableContext {
  sorting: SortingState;
  sortConfig?: ISortConfig;
  setSaveSorting?: (val: boolean) => void;
  setSorting: Dispatch<SetStateAction<SortingState>>;
}

const TableContext = createContext<ITableContext>({
  sorting: [],
  sortConfig: {
    field: "",
    direction: "",
  },
  setSaveSorting: () => null,
  setSorting: () => null,
});

export const useTableContext = () => useContext(TableContext);

export const TableContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const [saveSorting, setSaveSorting] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);

  const [sortConfig, setSortConfig] = useState<ISortConfig>();

  useEffect(() => {
    return () => {
      if (!saveSorting) {
        setSorting([]);
        setSortConfig(undefined);
      }
    };
  }, [location.pathname, saveSorting]);

  useEffect(() => {
    if (sorting.length) {
      sorting.map((s) => {
        setSortConfig({
          field: s.id,
          direction: s.desc ? "DESC" : "ASC",
        });
      });
    } else {
      setSortConfig(undefined);
    }
  }, [sorting, setSorting]);

  return (
    <TableContext.Provider
      value={{ sortConfig, sorting, setSorting, setSaveSorting }}
    >
      {children}
    </TableContext.Provider>
  );
};
