import { type FC, useEffect, useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  Typography,
  TypographyVariant,
  Item,
} from "../../../../../components/ui-kit";
import {
  Chart as ChartJS,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  LineElement,
  Tooltip,
  type TooltipItem,
  type ChartOptions,
  Filler,
  type ChartData,
  type ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DateTime } from "luxon";
import { EnlargedContainer } from "../../../../../components/containers";

const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface LineChartProps {
  dateFilter: string;
}

export const LineChart: FC<LineChartProps> = ({ dateFilter }) => {
  const [salesFilter, setSalesFilter] = useState<Item>();

  const [labels, setLabels] = useState<number[]>([]);

  const annotationLine = {
    id: "annotationLine",
    beforeDatasetsDraw: (chart: ChartJS) => {
      const activeElements = chart.getActiveElements();
      const activePoint = activeElements[0];
      if (!(activeElements.length === 0) && activePoint) {
        const ctx = chart.ctx;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(activePoint.element.x, chart.chartArea.top);
        ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#8181A5";
        ctx.stroke();
        ctx.restore();
      }
    },
  };

  const marginTooltip = {
    id: "marginTooltip",
    afterDatasetsDraw: (chart: ChartJS) => {
      const activeElements = chart.getActiveElements();
      const activePoint = activeElements[0];
      if (
        !(activeElements.length === 0) &&
        activePoint &&
        chart.tooltip != null &&
        activePoint.index >= 6 &&
        activePoint.element.y <= 70
      ) {
        const tooltip = chart.tooltip;
        tooltip.y = activePoint.element.y + 10;
        tooltip.x = activePoint.element.x - 105;
        tooltip.options.cornerRadius = {
          topLeft: 10,
          topRight: 0,
          bottomLeft: 10,
          bottomRight: 10,
        };
        chart.update();
      } else if (
        !(activeElements.length === 0) &&
        activePoint &&
        chart.tooltip != null &&
        activePoint.index <= 5 &&
        activePoint.element.y <= 70
      ) {
        const tooltip = chart.tooltip;
        tooltip.y = activePoint.element.y + 10;
        tooltip.x = activePoint.element.x + 10;
        tooltip.options.cornerRadius = {
          topLeft: 0,
          topRight: 10,
          bottomLeft: 10,
          bottomRight: 10,
        };
        chart.update();
      } else if (
        !(activeElements.length === 0) &&
        activePoint &&
        chart.tooltip != null &&
        activePoint.index <= 5
      ) {
        const tooltip = chart.tooltip;
        tooltip.y = activePoint.element.y - 70;
        tooltip.options.cornerRadius = {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 0,
          bottomRight: 10,
        };
        chart.update();
      } else if (
        !(activeElements.length === 0) &&
        activePoint &&
        chart.tooltip != null &&
        activePoint.index >= 6
      ) {
        const tooltip = chart.tooltip;
        tooltip.y = activePoint.element.y - 70;
        tooltip.options.cornerRadius = {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 10,
          bottomRight: 0,
        };
        chart.update();
      }
    },
  };

  const options: ChartOptions<"line"> = {
    layout: {
      padding: 0,
      autoPadding: false,
    },

    responsive: true,
    // maintainAspectRatio: false,
    font: {
      family: "Montserrat",
    },
    interaction: {
      intersect: false,
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          labelOffset: 2,
          count: 5,
          crossAlign: "far",
          // TODO find the proper type
          callback: (value: number | string) => {
            if (Number(value) === 0) {
              return String(value) + "k";
            } else if (Number(value) < 1000) {
              return String(Math.round(Number(value)));
            } else if (Number(value) >= 1000 && Number(value) < 1000000) {
              return String(Math.round(Number(value) / 1000)) + "k";
            } else if (Number(value) >= 1000000 && Number(value) < 1000000000) {
              return String(Math.round(Number(value) / 1000000)) + "m";
            }
          },
          color: "#8181A5",
        },

        grid: {
          color: "#EEEEEE",
          tickColor: "transparent",
        },
        border: { display: false },
      },
      x: {
        grid: {
          display: false,
        },
        border: { display: false },
        ticks: {
          // count: 11,
          // labelOffset: 25,
          // callback: (value: any) => {
          //   console.log(value);
          //   return value;
          // },
          color: "#8181A5",
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#13273F",
        cornerRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 10,
          bottomRight: 10,
        },
        caretSize: 0,
        caretPadding: 10,
        displayColors: false,
        callbacks: {
          title: (value: any) => {
            // console.log("title value", value);
            return "£" + String(value[0].formattedValue);
            // return `£${value[0].formattedValue.toFixed(2)}`;
          },
          label: (context: TooltipItem<"line">) => {
            // console.log("label value", context);
            return DateTime.now()
              .minus({ days: parseInt(context.label) })
              .toFormat("ll");
          },
        },

        padding: {
          top: 13,
          right: 21,
          bottom: 9,
          left: 15,
        },
        titleFont: {
          size: 13,
          weight: 600,
          lineHeight: "15px",
        },
        bodyFont: {
          size: 10,
          weight: 400,
          lineHeight: "12px",
        },
      },
    },
  };

  const mock = [
    {
      value: 1000.55,
    },
    {
      value: 10000.01,
    },
    {
      value: 20000,
    },
    {
      value: 19000.6,
    },
    {
      value: 10000.3,
    },
    {
      value: 17000,
    },
    {
      value: 20000.01,
    },
    {
      value: 8040,
    },
    {
      value: 10084.6,
    },
    {
      value: 20000,
    },
    {
      value: 12004.01,
    },
  ];

  useEffect(() => {
    setLabels([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31]);
  }, [dateFilter]);

  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        data: mock.map((el) => el.value),
        borderColor: "#00BC82",
        borderWidth: 2,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(44, 209, 158, 0.17)");
          gradient.addColorStop(1, "rgba(44, 209, 158, 0)");
          return gradient;
        },
        fill: true,

        pointRadius: 15,
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0, 0, 0, 0)",
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointHoverBorderColor: "#00BC82",
        pointHoverBackgroundColor: "#ffffff",
      },
    ],
  };

  return (
    <EnlargedContainer>
      <TopLine>
        <Typography variant={TypographyVariant.HEADER2}>
          Sale statistics
        </Typography>
        <Dropdown
          onChange={setSalesFilter}
          defaultItem={salesFilter}
          items={[
            { label: "All sales", value: "" },
            { label: "Ecommerce", value: "ecommerce" },
            { label: "In-store", value: "in-store" },
            { label: "Wholesale online", value: "wholesale online" },
            { label: "Wholesale in-depot", value: "wholesale in-depot" },
            { label: "Marketplace", value: "marketplace" },
            { label: "Other", value: "other" },
          ]}
        />
      </TopLine>
      <div>
        <Line
          options={options}
          data={data}
          plugins={[annotationLine, marginTooltip]}
        ></Line>
      </div>
    </EnlargedContainer>
  );
};
