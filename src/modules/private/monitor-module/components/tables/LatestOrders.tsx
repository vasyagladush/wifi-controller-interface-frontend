import { useState, FC } from "react";
import styled from "styled-components";
import { ColumnDef } from "@tanstack/table-core";
import {
  Status,
  DetailsButton,
  Typography,
  TypographyVariant,
  ReactTableComponent,
  Hypertext,
} from "../../../../../components/ui-kit";
import { FullContainer } from "../../../../../components/containers";

const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px;
`;

export const LatestOrders: FC = () => {
  // TODO Make data loading with useEffect

  const [data] = useState<Array<Record<string, any>>>([
    {
      id: "#1234567",
      name: "Neal Matthews",
      createdAt: "25 Oct, 2022",
      total: "£165.00",
      status: "paid",
      type: "Master card",
    },
    {
      id: "#1234567",
      name: "Jamal Burnett",
      createdAt: "25 Oct, 2022",
      total: "£294.00",
      status: "refund",
      type: "Paypal",
    },
    {
      id: "#1234567",
      name: "Juan Mitchell",
      createdAt: "24 Oct, 2022",
      total: "£678.00",
      status: "paid",
      type: "Visa",
    },
    {
      id: "#1234567",
      name: "Barry Dick",
      createdAt: "23 Oct, 2022",
      total: "£190.00",
      status: "chargeback",
      type: "Visa",
    },
    {
      id: "#1234567",
      name: "Ronald Taylor",
      createdAt: "22 Oct, 2022",
      total: "£890.10",
      status: "paid",
      type: "Visa",
    },
    {
      id: "#1234567",
      name: "Jacob Hunter",
      createdAt: "22 Oct, 2022",
      total: "£557.10",
      status: "refund",
      type: "Master card",
    },
    {
      id: "#1234567",
      name: "Daniel Hooper",
      createdAt: "22 Oct, 2022",
      total: "£678.00",
      status: "paid",
      type: "Master card",
    },
  ]);

  const columns: Array<ColumnDef<any, any>> = [
    {
      header: "Order ID",
      accessorKey: "id",
      cell: (info) => (
        <Typography variant={TypographyVariant.BODY2}>
          {info.getValue()}
        </Typography>
      ),
    },
    {
      header: "Billing Name",
      accessorKey: "name",
      cell: (info) => info.getValue(),
    },
    {
      header: "Date",
      accessorKey: "createdAt",
      cell: (info) => info.getValue(),
    },
    {
      header: "Total",
      accessorKey: "total",
      cell: (info) => info.getValue(),
    },
    {
      header: "Payment Status",
      accessorKey: "status",
      cell: (info) => <Status status={info.getValue()} />,
    },
    // {
    //   header: "Payment Method",
    //   accessorKey: "type",
    //   cell: (info) => <PaymentMethod method={info.getValue()} />,
    // },
    {
      header: "",
      accessorKey: "details",
      cell: () => <DetailsButton />,
    },
  ];

  return (
    <FullContainer>
      <TopLine>
        <Typography variant={TypographyVariant.HEADER2}>
          Latest orders
        </Typography>
        <Hypertext to={"#"}>View all</Hypertext>
      </TopLine>
      <ReactTableComponent padding="17px 15px" columns={columns} data={data} />
    </FullContainer>
  );
};
