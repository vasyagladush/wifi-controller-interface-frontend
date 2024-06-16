import { VisibilityState, type ColumnDef, Row } from "@tanstack/react-table";
import { ReactElement } from "react";
import {AccessPointsFilters } from "../../../modules/private/access-points-module/access-points/access-points-list/hooks/useAccessPointsList";

export interface PaginationControl {
  totalDocs: number;
  page: number;
  limit: number;
  onPaginationChange: (pageValue: number, limitValue: number) => void;
}

export interface RowSelectionControl {
  rowSelection?: Record<string, boolean>;
  setRowSelection?: (selection: Record<string, any>) => void;
}

export interface TableProps {
  columns: Array<ColumnDef<any, any>>;
  data: Array<Record<string, any>>;
  padding?: string;
  handleTableUpdate?: () => void;
  createCategory?: ReactElement;
  createSubCategory?: ReactElement;
  className?: string;
  onRowClick?: (rowData: Row<any>) => void;
  withPagination?: PaginationControl;
  withRowSelection?: RowSelectionControl;
  staticPaginator?: boolean;
  withSorting?: boolean;
  loading?: boolean;
  accessPointWithNetworksTable?: boolean;
  columnVisibility?: VisibilityState;
  hideRowPerPageAction?: boolean;
  alwaysExpandedTable?: boolean;
  appliedAccessPointsFilters?: AccessPointsFilters;
}
