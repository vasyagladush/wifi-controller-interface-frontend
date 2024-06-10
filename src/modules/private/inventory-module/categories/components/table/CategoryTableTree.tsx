import { type ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import styled from "styled-components";
import {
  Actions,
  PaginationControl,
  ReactTableComponent,
} from "../../../../../../components/ui-kit";
import {
  CategoryTablePatentCreation,
  CategoryTableSubCategoryCreation,
  ExpandableTreeCell,
} from "./index";
// import { usePolicyCheck } from "../../../../hooks/usePolicyCheck";
// import { Policies } from "@fena/toolkit-types";
import { CategoryApiType } from "../../../../../../util/types";

const Wrapper = styled.div``;

export interface EditData {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  parent: string;
  isSubCategory: boolean;
}

interface CategoryTreeTableProps {
  data: CategoryApiType[];
  className?: string;
  handleEdit: (data: EditData) => void;
  handleDelete: (
    id: string,
    productsCount: number,
    categoryName: string,
    depth: number
  ) => void;
  handleTableUpdate?: () => void;
  loading?: boolean;
  pagination: PaginationControl;
}

export const CategoryTreeTable: React.FunctionComponent<
  CategoryTreeTableProps
> = ({
  data,
  className,
  handleEdit,
  handleDelete,
  handleTableUpdate,
  loading,
  pagination,
}) => {
  // const { checkAccessByPolicies } = usePolicyCheck();

  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handleActionClick = (menuId: string | null) => {
    setOpenMenuId(menuId);
  };

  const columns: Array<ColumnDef<any, any>> = [
    {
      header: "Name",
      accessorKey: "name",
      enableSorting: false,
      cell: ({ row, getValue }) => {
        const { original } = row;
        return (
          <ExpandableTreeCell
            depth={row.depth}
            handleClick={row.getToggleExpandedHandler()}
            isExpanded={row.getIsExpanded()}
            name={getValue()}
            description={original.description}
            id={original._id}
            imageSrc={original.logo?.url}
          />
        );
      },
    },
    {
      header: "Products",
      accessorKey: "productsCount",
      enableSorting: true,
    },
    // {
    //   header: "Visible in menu",
    //   accessorKey: "isVisibleInMenu",
    //   cell: ({ getValue, row }) => {
    //     return <TableSwitchButton value={getValue()} row={row} />;
    //   },
    // },

    {
      header: "",
      id: "actions",
      cell: ({ row }) => {
        const { original } = row;

        return (
        <Actions
          externalUniqueId={original._id}
          externalOpenState={openMenuId === original._id}
          externalOpenAction={handleActionClick}
          actions={[
            {
              label: "Edit",
              onClick: () => {
                handleEdit({
                  id: original._id,
                  name: original.name,
                  description: original.description,
                  logoUrl: original.logo?.url,
                  parent: original?.parent,
                  isSubCategory: row.depth === 1,
                });
              },
              // hidden: !checkAccessByPolicies(
              //   [Policies.CATEGORY.ADMIN_ACCESS],
              //   [Policies.CATEGORY.UPDATE_CATEGORIES]
              // ),
            },
            {
              color: "#EF6355",
              label: "Delete",
              onClick: () => {
                handleDelete(
                  original._id,
                  original.productsCount,
                  original.name,
                  row.depth
                );
              },
              // hidden: !checkAccessByPolicies(
              //   [Policies.CATEGORY.ADMIN_ACCESS],
              //   [Policies.CATEGORY.DELETE_CATEGORIES]
              // ),
            },
          ]}
        />);
      },
    },
  ];
  return (
    <Wrapper className={className}>
      <ReactTableComponent
        createCategory={
          true ? (
            <CategoryTablePatentCreation
              handleTableUpdate={handleTableUpdate}
            />
          ) : undefined
        }
        createSubCategory={
          true ? (
            <CategoryTableSubCategoryCreation
              handleTableUpdate={handleTableUpdate}
            />
          ) : undefined
        }
        padding={"8px 15px"}
        columns={columns}
        data={data}
        handleTableUpdate={handleTableUpdate}
        withSorting
        loading={loading}
        withPagination={pagination}
      />
    </Wrapper>
  );
};
