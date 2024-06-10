import { useState, FC } from "react";
import styled from "styled-components";
import { ColumnDef } from "@tanstack/table-core";
import {
  Avatar,
  AvatarSizeVariant,
  Typography,
  TypographyVariant,
  Hypertext,
  ReactTableComponent,
} from "../../../../../components/ui-kit";
import { ReducedContainer } from "../../../../../components/containers";

const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

const Index = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #dbe3eb;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  margin-right: 7px;
`;

const Box = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
`;

const City = styled(Typography)`
  color: #8181a5;
`;

const Cell = styled.div`
  padding: 0 20px;
`;

const Rank: FC<any> = ({ index, name, city }) => {
  return (
    <Container>
      <div>
        <Index>{index}</Index>
      </div>
      <Avatar size={AvatarSizeVariant.SMALL} disableDropdown isOnline />
      <Box>
        <Typography variant={TypographyVariant.BODY2}>{name}</Typography>
        <City variant={TypographyVariant.BODY6}>{city}</City>
      </Box>
    </Container>
  );
};

export const TopWholesaleClients: FC = () => {
  // TODO Make data loading with useEffect

  const [data] = useState<Array<Record<string, any>>>([
    {
      rank: { name: "Diego Logan", city: "London" },
      orders: 567,
    },
    {
      rank: { name: "Antonio Calderon", city: "London" },
      orders: 489,
    },
    {
      rank: { name: "Jaxon Kidd", city: "New York" },
      orders: 338,
    },
  ]);
  const smallScreenData = window.innerWidth <= 1267 ? data.slice(0, 2) : data;
  const columns: Array<ColumnDef<any, any>> = [
    {
      header: "Rank",
      accessorKey: "rank",
      cell: ({ row }) => (
        <Rank
          index={row.index + 1}
          name={row.original.rank.name}
          city={row.original.rank.city}
        />
      ),
    },
    {
      header: "Orders",
      accessorKey: "orders",
      cell: (info) => <Cell>{info.getValue()}</Cell>,
    },
  ];

  return (
    <ReducedContainer>
      <TopLine>
        <Typography variant={TypographyVariant.HEADER2}>
          Top wholesale clients
        </Typography>
        <Hypertext to={"#"}>View all</Hypertext>
      </TopLine>
      <ReactTableComponent
        padding="0px"
        columns={columns}
        data={smallScreenData}
      />
    </ReducedContainer>
  );
};
