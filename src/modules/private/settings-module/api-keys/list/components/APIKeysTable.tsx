import React, { useState, type FC } from "react";
import { type ColumnDef } from "@tanstack/table-core";
import {
  Actions,
  ReactTableComponent,
  Status,
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";
import { useNavigate } from "react-router-dom";
import { ApiKeyApiType, WithId } from "../../../../../../util/types";
import styled from "styled-components";
import Info from "../../../../../../components/icons/Info";
import { Tooltip } from "react-tooltip";
import { CopyIDInput } from "./CopyIDInput";

const Box = styled.div`
  display: flex;
`;

const IconAndName = styled.div`
  display: flex;
  align-items: center;
`;

interface APIKeysTableProps {
  data: ApiKeyApiType[];
  handleDelete: (id: string) => void;
  loading?: boolean;
}

export const APIKeysTable: FC<APIKeysTableProps> = ({
  data,
  handleDelete,
  loading,
}) => {
  const navigate = useNavigate();

  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handleActionClick = (menuId: string | null) => {
    setOpenMenuId(menuId);
  };

  const onDetailsClick = (row: WithId<ApiKeyApiType>) => {
    // if (
    //   checkAccessByPolicies(
    //     [Policies.API_KEY.ADMIN_ACCESS],
    //     [Policies.API_KEY.UPDATE_API_KEY_INFO]
    //   )
    // ) {
    navigate(`${row.id}/details`);
    // }
  };

  const columns = React.useMemo<Array<ColumnDef<any, any>>>(
    () => [
      {
        header: "Status",
        accessorKey: "status",
        cell: (info) => {
          return <Status status={info.getValue()} />;
        },
      },
      {
        header: "",
        accessorKey: "description",
        cell: ({ row }) => {
          const { original } = row;
          return (
            <IconAndName>
              {original.name && (
                <Box
                  id={row.id}
                  data-place="top"
                  data-tooltip-content={
                    !original.description ? "None" : original.description
                  }
                >
                  <Info />
                </Box>
              )}
              <Tooltip
                place="top"
                anchorId={row.id}
                style={{
                  backgroundColor: "#556CB1",
                  zIndex: "99",
                  borderRadius: "24px",
                }}
              />
            </IconAndName>
          );
        },
      },
      {
        header: "Name",
        accessorKey: "name",
        cell: (info) => info.getValue(),
      },
      {
        header: "Role",
        accessorKey: "role",
        cell: ({ row }) => {
          const { original } = row;
          return (
            <Typography variant={TypographyVariant.BODY3}>
              {original?.role?.name}
            </Typography>
          );
        },
      },
      {
        header: "Terminal ID",
        accessorKey: "_id",
        cell: (info) => <CopyIDInput text={info.getValue()} />,
      },
      {
        header: "Terminal secret",
        accessorKey: "secretKey",
        cell: (info) => <CopyIDInput hideText text={info.getValue()} />,
      },
      // {
      //   header: "Created by",
      //   accessorKey: "createdBy",
      //   cell: (info) => {
      //     return (
      //       <CreateEntityTableCell
      //         createdByEntity={info.row.original.createdByEntity}
      //         createdBy={info.getValue()}
      //       />
      //     );
      //   },
      // },
      {
        header: "",
        accessorKey: "actions",
        cell: ({ row: { original } }) =>
          // checkAccessByPolicies(
          //   [
          //     Policies.API_KEY.ADMIN_ACCESS,
          //     Policies.API_KEY.UPDATE_API_KEY_INFO,
          //     Policies.API_KEY.DELETE_API_KEYS,
          //   ],
          //   [
          //     Policies.API_KEY.UPDATE_API_KEY_INFO,
          //     Policies.API_KEY.DELETE_API_KEYS,
          //   ]
          // )
          true ? (
            <Actions
              externalUniqueId={original._id}
              externalOpenState={openMenuId === original._id}
              externalOpenAction={handleActionClick}
              actions={[
                {
                  label: "Edit",
                  onClick: () => {
                    onDetailsClick(original);
                  },
                  // hidden: !checkAccessByPolicies(
                  //   [Policies.API_KEY.ADMIN_ACCESS],
                  //   [Policies.API_KEY.UPDATE_API_KEY_INFO]
                  // ),
                },
                {
                  label: "Delete",
                  color: "#EF6355",
                  onClick: () => {
                    handleDelete(original._id);
                  },
                  // hidden: !checkAccessByPolicies(
                  //   [Policies.API_KEY.ADMIN_ACCESS],
                  //   [Policies.API_KEY.DELETE_API_KEYS]
                  // ),
                },
              ]}
            />
          ) : null,
      },
    ],
    [openMenuId]
  );

  return (
    <ReactTableComponent
      columns={columns}
      data={data}
      onRowClick={(row) => {
        onDetailsClick(row.original);
      }}
      loading={loading}
    />
  );
};
