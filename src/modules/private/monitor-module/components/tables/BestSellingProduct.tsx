import { useState, FC } from "react";
import styled from "styled-components";
import {
  Typography,
  TypographyVariant,
  Hypertext,
  ReactTableComponent,
} from "../../../../../components/ui-kit";
import { ColumnDef } from "@tanstack/table-core";
import { Item } from "../../../../../components/icons";
import { EnlargedContainer } from "../../../../../components/containers";

const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0 20px;
`;

const ProductNameContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

const ImgWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: #eeeeee;
  border-radius: 5px;
  margin-right: 13px;
`;

const ProductName = ({ name }: { name?: string }) => {
  return (
    <ProductNameContainer>
      <div>
        <ImgWrapper>
          <Item />
        </ImgWrapper>
      </div>
      <Typography variant={TypographyVariant.BODY2}>{name}</Typography>
    </ProductNameContainer>
  );
};

const Cell = styled.div`
  padding-left: 15px;
`;

export const BestSellingProducts: FC = () => {
  // TODO Make data loading with useEffect

  const [data] = useState<Array<Record<string, any>>>([
    {
      name: "CBD Oil Budtender Cannabis Hemp",
      price: "£65.50",
      sold: 327,
      inStock: "Out of stock",
    },
    {
      name: "Social Cbd Patch 20mg 1pk",
      price: "£15.99",
      sold: 127,
      inStock: "467",
    },
    {
      name: "Plus Cbd Oil Drops Peppermint 750mg",
      price: "£87.00",
      sold: 119,
      inStock: "218",
    },
  ]);

  const columns: Array<ColumnDef<any, any>> = [
    {
      header: "Product name",
      accessorKey: "name",
      cell: (info) => <ProductName name={info.getValue()} />,
    },
    {
      header: "Price",
      accessorKey: "price",
      cell: (info) => <Cell>{info.getValue()}</Cell>,
    },
    {
      header: "Sold",
      accessorKey: "sold",
      cell: (info) => <Cell>{info.getValue()}</Cell>,
    },
    {
      header: "In Stock",
      accessorKey: "inStock",
      cell: (info) => <Cell>{info.getValue()}</Cell>,
    },
  ];

  return (
    <EnlargedContainer>
      <TopLine>
        <Typography variant={TypographyVariant.HEADER2}>
          Best selling products
        </Typography>
        <Hypertext to={"#"}>View all</Hypertext>
      </TopLine>
      <ReactTableComponent padding="0px" columns={columns} data={data} />
    </EnlargedContainer>
  );
};
