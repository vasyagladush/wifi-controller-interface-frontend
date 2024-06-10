import { useState, FC } from "react";
import styled from "styled-components";
import {
  Typography,
  TypographyVariant,
  ReactTableComponent,
} from "../../../../../components/ui-kit";
import { ColumnDef } from "@tanstack/table-core";
import {
  Chart as ChartJS,
  ArcElement,
  ChartOptions,
  Filler,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { EnlargedContainer } from "../../../../../components/containers";

ChartJS.register(ArcElement, Filler);

const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0 20px;
`;

const Cell = styled.div`
  padding: 9px 15px;
`;

const FlexBox = styled.div`
  display: flex;
`;

const FlexCell = styled(Cell)`
  display: flex;
  align-items: center;
`;

const Dot = styled.div<{ dotColor: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
  ${({ dotColor }) => dotColor && `background-color: ${dotColor};`}
`;

interface ChanelsCol {
  dotColor: string;
  chanel: string;
}

const FlexCol: FC<ChanelsCol> = ({ dotColor, chanel }) => {
  return (
    <FlexCell>
      <Dot dotColor={dotColor} />
      {chanel}
    </FlexCell>
  );
};

export const TopSalesChannels: FC = () => {
  // TODO Make data loading with useEffect

  const [data] = useState<Array<Record<string, any>>>([
    {
      chanels: "Online",
      salesAmount: "£920.000",
      previousPeriod: "+6,5%",
      dotColor: "#13273F",
    },
    {
      chanels: "Ecommerce",
      salesAmount: "£870.000",
      previousPeriod: "+4,5%",
      dotColor: "#2CD19E",
    },
    {
      chanels: "B2B sales",
      salesAmount: "£370.000",
      previousPeriod: "-0,05%",
      dotColor: "#FFCE00",
    },
    {
      chanels: "B2C sales",
      salesAmount: "£290.000",
      previousPeriod: "+9,5%",
      dotColor: "#8181A5",
    },
    {
      chanels: "Other",
      salesAmount: "£9900",
      previousPeriod: "+1,5%",
      dotColor: "#027AFF",
    },
  ]);

  const columns: Array<ColumnDef<any, any>> = [
    {
      header: "Chanels",
      accessorKey: "chanels",
      cell: ({ row }) => (
        <FlexCol
          dotColor={row.original.dotColor}
          chanel={row.original.chanels}
        />
      ),
    },
    {
      header: "Sales amount",
      accessorKey: "salesAmount",
      cell: (info) => <Cell>{info.getValue()}</Cell>,
    },
    {
      header: "Previous period",
      accessorKey: "previousPeriod",
      cell: (info) => <Cell>{info.getValue()}</Cell>,
    },
  ];

  const options: ChartOptions<"doughnut"> = {
    layout: {
      padding: 0,
      autoPadding: false,
    },
    responsive: true,
    cutout: "70%",
    font: {
      family: "Montserrat",
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        fullSize: true,
        position: "bottom",
        align: "center",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#13273F",
          boxPadding: 0,
          boxWidth: 5,
          boxHeight: 5,

          font: {
            family: "Montserrat",
            weight: 400,
          },
        },
      },
    },
  };

  const mock = [920, 870, 370, 290, 99];

  const dataChart: ChartData<"doughnut"> = {
    datasets: [
      {
        data: mock.map((el: number) => el),
        backgroundColor: [
          "#13273F",
          "#2CD19E",
          "#FFCE00",
          "#8181A5",
          "#027AFF",
        ],
        borderWidth: 0,
        hoverBorderWidth: 0,
      },
    ],
  };

  return (
    <EnlargedContainer>
      <TopLine>
        <Typography variant={TypographyVariant.HEADER2}>
          Top sales channels
        </Typography>
      </TopLine>
      <FlexBox>
        <div style={{ width: "30%", padding: "5% 30px 0 0" }}>
          <Doughnut options={options} data={dataChart}></Doughnut>
        </div>
        <ReactTableComponent padding="0px" columns={columns} data={data} />
      </FlexBox>
    </EnlargedContainer>
  );
};
