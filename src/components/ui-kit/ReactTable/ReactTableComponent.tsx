import React, { FC, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ExpandedState,
  getExpandedRowModel,
  getSortedRowModel,
  Row,
} from "@tanstack/react-table";
import styled from "styled-components";
import { type TableProps } from "./ReactTableComponent.interface";
import {
  Checkbox,
  LoadingBar,
  Paginator,
  Typography,
  TypographyVariant,
} from "..";
import { ColumnDef } from "@tanstack/table-core";
import { useTableContext } from "./context/TableContext";
import { ArrowDownBlack } from "../../icons";
import {
  ExpandNetworksBtn,
  IconForNetworksBtn,
} from "../../../modules/private/access-points-module/tables/components/ExpandableAccessPointAndNetworksTreeCell";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../constants/routes";

const TableContainer = styled.div<{ staticPaginator?: boolean }>`
  ${({ staticPaginator }) =>
    staticPaginator && "max-height: 50vh; overflow-y: auto;"}
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  tbody {
    tr {
      :hover {
        background-color: #f2f4ff;
      }
    }
  }
`;

const Thead = styled.thead`
  background-color: #f4f5f9;
  z-index: 10;
`;

const Tr = styled.tr<{ accessPointsTableRow?: boolean }>`
  :last-child {
    td {
      border-bottom: 0;
    }
  }
  ${({ accessPointsTableRow }) =>
    accessPointsTableRow && ":hover { td { background-color: #f2f4ff;} }"}
`;

const Th = styled.th`
  position: relative;
  text-align: left;
  padding: 15px;
  font-size: 12px;
  font-weight: 600;
  color: #556CB1;
  :first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  :last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Td = styled.td<{
  padding?: string;
  apTableCell?: boolean;
  firstCol?: boolean;
  rowWithExpandedVariants?: boolean;
}>`
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  padding: ${({ padding }) => padding ?? "15px"};
  border-bottom: 1px solid #eeeeee;
  text-align: left;
  color: #556CB1;
  cursor: pointer;
  :last-child {
    border-right: 0;
  }

  ${({ apTableCell }) => apTableCell && "background-color: #F8F9FA;"}
  ${({ firstCol }) => firstCol && "border-bottom: none;"}
  ${({ rowWithExpandedVariants }) =>
    rowWithExpandedVariants && "border-bottom: none;"}
`;

const TrLoading = styled.tr<{ loading?: boolean }>`
  ${({ loading }) => !loading && "display: none;"}
  background-color: #ffffff !important;
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowUpBlack = styled(ArrowDownBlack)`
  transform: rotate(180deg);
  margin-left: 5px;
  margin-top: 2px;
`;

const StyledArrowDownBlack = styled(ArrowDownBlack)`
  margin-left: 5px;
  margin-top: 2px;
`;

const StyledCheckbox = styled(Checkbox)`
  div {
    margin-right: 0;
  }
`;

const StyledPaginator = styled(Paginator)`
  margin-top: 10px;
`;

const ShowMoreTr = styled.tr`
  :hover {
    background-color: transparent !important;
  }
`;

const ShowMoreWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const selectableColumn: ColumnDef<any> = {
  id: "select",
  header: ({ table }) => (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
      }}
    >
      <StyledCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    </div>
  ),
  cell: ({ row }) =>
    row.depth === 0 && (
      <div
        style={{ paddingLeft: 10 }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <StyledCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
};

export const ReactTableComponent: FC<TableProps> = ({
  columns,
  data,
  padding,
  createCategory,
  createSubCategory,
  className,
  onRowClick,
  withPagination,
  withRowSelection,
  staticPaginator,
  withSorting,
  loading,
  accessPointWithNetworksTable,
  columnVisibility,
  hideRowPerPageAction,
  alwaysExpandedTable,
  appliedAccessPointsFilters,
}) => {
  const { sorting, setSorting } = useTableContext();
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState<ExpandedState>({});

  const onClickShowMore = (accessPointId: string) => {
    navigate(AppRoutes.Private.AccessPoints.AP_EDIT + "/" + accessPointId, {
      state: { filters: appliedAccessPointsFilters },
    });
  };

  const handleRowClick = (row: Row<any>) => () => {
    onRowClick?.(row);
  };

  const columnsWithRowSelection = [selectableColumn, ...columns];

  const table = useReactTable({
    data,
    columns: withRowSelection ? columnsWithRowSelection : columns,
    state: {
      expanded,
      rowSelection: withRowSelection?.rowSelection,
      sorting,
      columnVisibility,
    },
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    getRowCanExpand: () => true,
    getExpandedRowModel: getExpandedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true,
    enableRowSelection: !!withRowSelection,
    onRowSelectionChange: withRowSelection?.setRowSelection,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className={className}>
      <TableContainer staticPaginator={staticPaginator}>
        <Table>
          <Thead>
            {table.getHeaderGroups().map((headerGroup, index) => (
              <Tr key={headerGroup.id ?? String(index) + "TrHeader"}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      style={{
                        cursor:
                          header.column.getCanSort() && withSorting
                            ? "pointer"
                            : "default",
                      }}
                      key={header.id}
                      colSpan={header.colSpan}
                    >
                      {header.isPlaceholder ? null : withSorting ? (
                        <ArrowWrapper
                          {...{
                            onClick: withSorting
                              ? header.column.getToggleSortingHandler()
                              : () => {},
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: <ArrowUpBlack />,
                            desc: <StyledArrowDownBlack />,
                          }[header.column.getIsSorted() as string] ?? null}
                        </ArrowWrapper>
                      ) : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>

          <tbody>
            <TrLoading loading={loading}>
              <td
                colSpan={
                  withRowSelection
                    ? columnsWithRowSelection.length
                    : columns.length
                }
                key="tdLoading"
              >
                <LoadingBar loading={loading} margin="5px 0" />
              </td>
            </TrLoading>

            {createCategory && createCategory}

            {table.getCoreRowModel().rows.map((row) => {
              const hasMoreThanFourSubRows = row.subRows.length > 4;
              // const lastSubRowIndex =
              //   row.subRows.length > 0 ? row.subRows.length - 1 : -1;

              // const isLastSubRow = (currentIndex: number) =>
              //   currentIndex === lastSubRowIndex;

              return (
                <>
                  <Tr onClick={handleRowClick(row)} key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <Td
                          padding={padding}
                          key={cell.id}
                          rowWithExpandedVariants={
                            row.getIsExpanded() && !!row.subRows.length
                          }
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Td>
                      );
                    })}
                  </Tr>

                  {(row.getIsExpanded() || alwaysExpandedTable) &&
                    row.subRows
                      .slice(
                        0,
                        accessPointWithNetworksTable &&
                          !alwaysExpandedTable &&
                          hasMoreThanFourSubRows
                          ? 4
                          : undefined
                      )
                      .map((subRow, subRowIndex) => {
                        return (
                          <>
                            <Tr
                              onClick={handleRowClick(row)}
                              key={subRow.id}
                              accessPointsTableRow={accessPointWithNetworksTable}
                            >
                              {subRow.getVisibleCells().map((cell, i) => {
                                return (
                                  <Td
                                    padding={padding}
                                    key={cell.id}
                                    apTableCell={
                                      accessPointWithNetworksTable
                                    }
                                    // firstCol={
                                    //   accessPointWithNetworksTable
                                    // }
                                  >
                                    {flexRender(
                                      cell.column.columnDef.cell,
                                      cell.getContext()
                                    )}
                                  </Td>
                                );
                              })}
                            </Tr>
                            {accessPointWithNetworksTable &&
                              !alwaysExpandedTable &&
                              hasMoreThanFourSubRows &&
                              subRowIndex === 3 && (
                                <ShowMoreTr>
                                  <td
                                    colSpan={
                                      withRowSelection
                                        ? columnsWithRowSelection.length
                                        : columns.length
                                    }
                                  >
                                    <ShowMoreWrapper>
                                      <ExpandNetworksBtn
                                        onClick={() => {
                                          onClickShowMore(row.original.id);
                                        }}
                                      >
                                        <Typography
                                          variant={TypographyVariant.BODY13}
                                          color="#027AFF"
                                        >
                                          View all
                                        </Typography>
                                        <IconForNetworksBtn isExpanded />
                                      </ExpandNetworksBtn>
                                    </ShowMoreWrapper>
                                  </td>
                                </ShowMoreTr>
                              )}
                          </>
                        );
                      })}

                  {createSubCategory &&
                    row.getIsExpanded() &&
                    React.cloneElement(createSubCategory, {
                      row,
                    })}
                </>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
      {withPagination && (
        <StyledPaginator
          hideRowPerPageAction={hideRowPerPageAction}
          totalDocs={withPagination.totalDocs}
          currentPage={withPagination.page}
          perPage={withPagination.limit}
          onPaginationChange={withPagination.onPaginationChange}
        />
      )}
    </div>
  );
};
